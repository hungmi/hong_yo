class Admin::StoriesController < ApplicationController
	layout 'admin'
	before_action :set_story, except: [:index, :create, :new]

	def index
		@nav_title = "最新消息"
		@stories = Story.all.order(id: :desc)
	end

	def new
		@story = Story.new
	end

	def create
		@story = Story.new(story_params)
		if @story.save
      flash[:success] = "建立成功。 "
      redirect_to admin_stories_url
    else
      render :new
    end
	end

	def show
	end

	def edit
	end

	def update
		# 因為當 front end js 移除檔案時
		story_params2 = story_params
		if story_params.has_key?(:cover) && story_params[:cover].blank?
			story_params2 = story_params.except(:cover)
			@story.cover.purge_later if @story.cover.attached?
		end
		if @story.update(story_params2)
      flash[:success] = "更新成功。 "
      redirect_to admin_stories_url
    else
      render :edit
    end
	end

	def destroy
		if @story.destroy
			flash[:success] = "刪除成功。"
		else
			flash[:danger] = "刪除失敗。"
		end
		redirect_to admin_stories_url
	end

	private

	def set_story
		@story = Story.find(params[:id])
	end

	def story_params
		params.require(:story).permit(:title, :content, :status, :cover)
	end
end
