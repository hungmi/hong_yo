class CategoriesController < ApplicationController
	def children
		@category = Category.find(params[:id])

		respond_to do |format|
			if @category.children.present?
				format.js
			else
				format.js { head :ok }
			end
		end
	end

	def products
		@category = Category.find(params[:id])

		respond_to do |format|
			@products = if @category.leaves.present?
				Product.where(id: @category.leaves.map { |leaf| leaf.products.pluck(:id) }.flatten.uniq)
			else
				@category.products
			end.order(id: :desc).limit(36)
			format.js
		end
	end
end