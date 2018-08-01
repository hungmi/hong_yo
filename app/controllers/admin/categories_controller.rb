class Admin::CategoriesController < AdminController
	layout 'admin'
	before_action :set_category, except: [:index, :create, :new]

	def index
		# disable_turbolinks_cache
		@nav_title = "產品分類"
		@category_roots = Category.roots.order(id: :asc)
	end

	def new
		@category = Category.new
	end

	def create
		@category = Category.new(category_params)
		if @category.save
			if (@parent = Category.find_by_id(category_params[:parent_id])).present?
				@category.move_to_child_of(@parent)
			end
      flash[:success] = "建立成功。 "
      redirect_to admin_categories_url
    else
    	flash.now[:danger] = @category.errors.messages.values.reject { |v| v.empty? }.join("<br>")
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
		if category_params.has_key?(:cover) && category_params[:cover].blank?
			category_params2 = category_params.except(:cover)
			@category.cover.purge_later if @category.cover.attached?
		end
		if @category.update(category_params2)
			if (@parent = Category.find_by_id(category_params[:parent_id])).present?
				@category.move_to_child_of(@parent)
			end
      flash[:success] = "更新成功。 "
      redirect_to admin_categories_url(edited_category_id: @category.id)
    else
    	flash.now[:danger] = @category.errors.messages.values.reject { |v| v.empty? }.join("<br>")
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
		params.require(:category).permit(:en_name, :zh_name, :en_description, :zh_description, :cover, :product_cover, :parent_id)
	end
end
