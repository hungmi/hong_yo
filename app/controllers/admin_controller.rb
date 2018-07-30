class AdminController < ApplicationController
	layout "admin"
	include TurbolinksCacheControl

	def default_url_options
	  {}
	end
end