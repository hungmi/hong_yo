class Admin::CategoriesController < ApplicationController
	layout 'admin'
	before_action :set_category, except: [:index, :create, :new]

	def index
		@nav_title = "產品分類"
		Category.all
	end

	def new
		@category = Category.new
	end

	def create
		@category = Category.new(category_params)
		if @category.save
      flash[:success] = "建立成功。 "
      redirect_to admin_categories_url
    else
      render :new
    end
	end

	def show
	end

	def edit
	end

	def update
		# 因為當 front end js 移除檔案時
		category_params2 = category_params
		# if category_params.has_key?(:cover) && category_params[:cover].blank?
		# 	category_params2 = category_params.except(:cover)
		# 	@category.cover.purge_later if @category.cover.attached?
		# end
		if @category.update(category_params2)
      flash[:success] = "更新成功。 "
      redirect_to admin_categories_url
    else
      render :edit
    end
	end

	def destroy
		if @category.destroy
			flash[:success] = "刪除成功。"
		else
			flash[:danger] = "刪除失敗。"
		end
		redirect_to admin_categories_url
	end

	private

	def set_category
		@category = Category.find(params[:id])
	end

	def category_params
		params.require(:category).permit(:name, :description, :status, images: [])
	end
end
