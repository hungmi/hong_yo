class ProductsController < ApplicationController
	def show
		@custom_footer = true
		# product = Product.find(params[:id])
		@product = Product.includes(varieties: :features).with_attached_images.with_attached_file.find(params[:id])
	end
end
