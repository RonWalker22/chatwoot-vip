# == Schema Information
#
# Table name: contacts
#
#  id                    :integer          not null, primary key
#  additional_attributes :jsonb
#  email                 :string
#  identifier            :string
#  name                  :string
#  phone_number          :string
#  pubsub_token          :string
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  account_id            :integer          not null
#
# Indexes
#
#  index_contacts_on_account_id         (account_id)
#  index_contacts_on_pubsub_token       (pubsub_token) UNIQUE
#  uniq_email_per_account_contact       (email,account_id) UNIQUE
#  uniq_identifier_per_account_contact  (identifier,account_id) UNIQUE
#

class Contact < ApplicationRecord
  include Pubsubable
  include Avatarable
  include AvailabilityStatusable
  include Events::Types

  validates :account_id, presence: true
  validates :email, allow_blank: true, uniqueness: { scope: [:account_id], case_sensitive: false }
  validates :identifier, allow_blank: true, uniqueness: { scope: [:account_id] }

  belongs_to :account
  has_many :conversations, dependent: :destroy
  has_many :contact_inboxes, dependent: :destroy
  has_many :inboxes, through: :contact_inboxes
  has_many :messages, dependent: :destroy
  has_many :feedback_contacts, dependent: :destroy
  # rubocop:disable Rails/InverseOf
  has_many :created_feedbacks,
           class_name: 'Feedback',
           foreign_key: 'requester_id',
           dependent: :destroy
  # rubocop:enable Rails/InverseOf
  has_many :supported_feedbacks, through: :feedback_contacts, source: :feedback
  has_many :problems, through: :feedback_contacts
  has_many :solutions, through: :feedback_contacts
  has_many :clarification_posts, dependent: :destroy

  before_validation :downcase_email
  after_create :dispatch_create_event
  after_update :dispatch_update_event

  def get_source_id(inbox_id)
    contact_inboxes.find_by!(inbox_id: inbox_id).source_id
  end

  def push_event_data
    {
      additional_attributes: additional_attributes,
      email: email,
      id: id,
      identifier: identifier,
      name: name,
      phone_number: phone_number,
      pubsub_token: pubsub_token,
      thumbnail: avatar_url,
      type: 'contact'
    }
  end

  def webhook_data
    {
      id: id,
      name: name,
      avatar: avatar_url,
      type: 'contact'
    }
  end

  def downcase_email
    email.downcase! if email.present?
  end

  private

  def dispatch_create_event
    Rails.configuration.dispatcher.dispatch(CONTACT_CREATED, Time.zone.now, contact: self)
  end

  def dispatch_update_event
    Rails.configuration.dispatcher.dispatch(CONTACT_UPDATED, Time.zone.now, contact: self)
  end
end
