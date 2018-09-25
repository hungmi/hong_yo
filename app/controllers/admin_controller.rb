class AdminController < ApplicationController
	layout "admin"
	before_action :check_admin

	def default_url_options
	  {}
	end

	def check_admin
		unless controller_name == "sessions"
			redirect_to admin_signin_path(back_path: request.fullpath) unless user_signed_in?
		end
	end
end