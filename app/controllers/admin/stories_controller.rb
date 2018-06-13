class Admin::StoriesController < ApplicationController
	layout 'admin'
	def index
		@nav_title = "最新消息"
		@stories = Story.all.order(id: :asc)
	end
end
