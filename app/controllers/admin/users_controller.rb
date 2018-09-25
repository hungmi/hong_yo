class Admin::UsersController < AdminController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /users/1/edit
  def edit
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      flash[:success] = I18n.t('flash.update_success')
      redirect_to [:admin, @user]
    else
      render :edit
    end
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:password, :password_confirmation)
    end
end