class CreateFeedbackUser < ActiveRecord::Migration[6.0]
  def change
    create_table :feedback_users do |t|
      t.references :feedback, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
    add_index :feedback_users, [:feedback_id, :user_id], unique: true
  end
end
