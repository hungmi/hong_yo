class Admin::StoriesController < AdminController
	layout 'admin'
	before_action :set_story, except: [:index, :create, :new]

	def index
		disable_turbolinks_cache
		@nav_title = "最新消息"
		@stories = Story.all.order(id: :desc)
	end

	def new
		@story = Story.new
	end

	def create
		@story = Story.new(story_params.except(:cover))
		if @story.save
			if story_params.has_key?(:cover)
				if story_params[:cover].blank? && @story.cover.attached?
					@story.cover.purge_later
				else
					@story.cover.attach(story_params[:cover])
				end
			end
      flash[:success] = "建立成功。 "
      redirect_to admin_stories_url
    else
    	flash.now[:danger] = @story.errors.messages.values.reject { |v| v.empty? }.join("<br>")
      render :new
    end
	end

	def show
	end

	def edit
	end

	def update
		if @story.update(story_params.except(:cover))
			if story_params.has_key?(:cover)
				if story_params[:cover].blank? && @story.cover.attached?
					@story.cover.purge_later
				else
					@story.cover.attach(story_params[:cover])
				end
			end
      flash[:success] = "更新成功。 "
      redirect_to admin_stories_url
    else
    	flash.now[:danger] = @story.errors.messages.values.reject { |v| v.empty? }.join("<br>")
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
		params.require(:story).permit(:en_title, :zh_title, :en_content, :zh_content, :status, :cover, :publish_date)
	end
end
