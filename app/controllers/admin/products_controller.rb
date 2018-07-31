class Admin::ProductsController < AdminController
	layout 'admin'
	before_action :set_product, except: [:index, :create, :new]

	def index
		disable_turbolinks_cache
		@nav_title = "產品資訊"
		@category = Category.find_by_id(params[:category_id])
		@products = if @category.present?
			Product.includes(:category).where(category_id: @category.self_and_descendants.pluck(:id))
		else
			Product.includes(:category).all
		end.order(updated_at: :desc)
	end

	def new
		@product = Product.new
	end

	def create
		@product = Product.new(product_params)
		if @product.save
      flash[:success] = "建立成功。 "
      redirect_to admin_products_url
    else
      render :new
    end
	end

	def show
	end

	def edit
	end

	def update
		product_params2 = product_params
		if product_params.has_key?(:file) && product_params[:file].blank?
			product_params2 = product_params.except(:file)
			@product.file.purge_later if @product.file.attached?
		end
		if @product.update(product_params2.except(:images))
      @product.images.where(id: params[:product][:remove_images].keys).map(&:purge_later) if params[:product][:remove_images].present?
      @product.images.attach(params[:product][:images]) if params[:product][:images]
      flash[:success] = "更新成功。 "
      redirect_to edit_admin_product_url(@product)
    else
      render :edit
    end
	end

	def destroy
		if @product.destroy
			flash[:success] = "刪除成功。"
		else
			flash[:danger] = "刪除失敗。"
		end
		redirect_to admin_products_url
	end

	private

	def set_product
		@product = Product.find(params[:id])
	end

	def product_params
		params.require(:product).permit(:en_name, :zh_name, :en_description, :zh_description, :status, :file, images: [])
	end
end
