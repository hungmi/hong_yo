class ProductsController < ApplicationController
	def show
		@custom_footer = true
		@product = Product.find(params[:id])
	end
end
