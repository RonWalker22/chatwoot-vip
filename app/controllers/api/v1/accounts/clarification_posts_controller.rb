class Api::V1::Accounts::ClarificationPostsController < Api::V1::Accounts::BaseController
  before_action :set_clarification_post, only: [:destroy]
  before_action :check_authorization

  def create
    post = Current.account.clarification_posts.new(clarification_post_params)
    post.user = Current.user

    if post.save
      render json: {
        feedback_id: post.proposal.feedback.display_id,
        post: {
          body: post.body,
          user: post.author_name,
          id: post.id,
          date: post.created_at.strftime('%b %d %Y'),
          proposal: post.proposal_id
        }
      }
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    id = @clarification_post.id
    feedback_id = @clarification_post.proposal.feedback.display_id
    @clarification_post.destroy
    render json: {
      feedback_id: feedback_id,
      id: id
    }
  end

  private

  def set_clarification_post
    @clarification_post = Current.account.clarification_posts.find(params[:id])
  end

  def clarification_post_params
    params.require(:clarification_post).permit(:body,
                                               :proposal_id)
  end

  def check_authorization
    authorize(@clarification_post || ClarificationPost)
  end
end
