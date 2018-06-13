class Admin::StoriesController < ApplicationController
	layout 'admin'
	before_action :set_story, except: [:index, :create, :new]

	def index
		@nav_title = "最新消息"
		@stories = Story.all.order(id: :asc)
	end

	def new
		@story = Story.new(story_params)
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
		if @story.update(story_params)
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
