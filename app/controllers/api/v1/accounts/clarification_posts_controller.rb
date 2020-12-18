class Api::V1::Accounts::ClarificationPostsController < Api::V1::Accounts::BaseController
  before_action :set_clarification_post, only: [:destroy]
  before_action :check_authorization, except: [:create]
  before_action :set_feedback, only: [:create]

  def create
    find_feedback_user || create_feedback_user

    post = ClarificationPost.new(clarification_post_params)
    post.author = @feedback_user

    if post.save
      user = post.author.user
      name = user.display_name.presence ? user.display_name : user.name

      render json: {
        feedback_id: post.author.feedback_id,
        post: {
          body: post.body,
          author: name,
          id: post.id,
          date: post.created_at.to_date,
          thread: post.clarification_thread_id
        }
      }
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    id = @clarification_post.id
    feedback_id = @clarification_post.author.feedback_id
    @clarification_post.destroy
    render json: {
      feedback_id: feedback_id,
      id: id
    }
  end

  private

  def set_clarification_post
    @clarification_post = ClarificationPost.find(params[:id])
  end

  def clarification_post_params
    params.require(:clarification_post).permit(:body,
                                               :id,
                                               :clarification_thread_id)
  end

  def extra_parms
    params.permit(:feedback_id)
  end

  def set_feedback
    @feedback = Current.account.feedbacks.find(extra_parms['feedback_id'])
  end

  def create_feedback_user
    @feedback_user = FeedbackUser.create user: Current.user,
                                         feedback: @feedback
  end

  def find_feedback_user
    @feedback_user = FeedbackUser.find_by user: Current.user,
                                          feedback: @feedback
  end

  def check_authorization
    authorize(@clarification_post)
  end
end