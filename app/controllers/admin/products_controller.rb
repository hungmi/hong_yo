class Admin::ProductsController < ApplicationController
	layout 'admin'
	before_action :set_product, except: [:index, :create]

	def index
		@nav_title = "產品資訊"
		@products = Product.all.order(id: :asc)
	end

	private

	def set_product
		@product = Product.find(params[:id])
	end
end
