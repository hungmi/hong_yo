class Admin::CataloguesController < ApplicationController
	layout 'admin'
	def index
		@nav_title = "商品目錄"
		@catalogues = Catalogue.all.order(id: :asc)
	end
end