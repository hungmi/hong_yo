class Admin::ProductsController < AdminController
	layout 'admin'
	before_action :set_product, except: [:index, :create, :new, :reorder]

	def index
		disable_turbolinks_cache
		@nav_title = "產品資訊"
		@category = Category.find_by_id(params[:category_id])
		@products = if @category.present?
			Product.includes(:category, :twin).where(category_id: @category.self_and_descendants.pluck(:id))
		else
			Product.includes(:category, :twin).all
		end.order(ordering: :asc, id: :desc)
	end

	def new
		@product = Product.new
	end

	def create
		if product_params.has_key?(:twin_id) && product_params[:twin_id].present?
			@product = Product.new(twin_product_params)
		else
			@product = Product.new(product_params)
		end

		if @product.save
      flash[:success] = "建立成功。 "
      redirect_to admin_products_url(category_id: @product.category_id)
    else
    	flash.now[:danger] = @product.errors.messages.values.reject { |v| v.empty? }.join("<br>")
      render :new
    end
	end

	def show
	end

	def edit
	end

	def update
		if product_params.has_key?(:twin_id) && product_params[:twin_id].present?
			if @product.update(twin_product_params)
				flash[:success] = "更新成功。 "
	      redirect_to edit_admin_product_url(@product)
	    else
	    	flash.now[:danger] = @product.errors.messages.values.reject { |v| v.empty? }.join("<br>")
	      render :edit
	    end
		else
			product_params2 = product_params
			if product_params.has_key?(:file) && product_params[:file].blank?
				product_params2 = product_params2.except(:file)
				@product.file.purge_later if @product.file.attached?
			end
			if @product.update(product_params2.except(:images))
	      @product.images.where(id: params[:product][:remove_images].keys).map(&:purge_later) if params[:product][:remove_images].present?
	      @product.images.attach(params[:product][:images]) if params[:product][:images]
	      flash[:success] = "更新成功。 "
	      redirect_to edit_admin_product_url(@product)
	    else
	    	flash.now[:danger] = @product.errors.messages.values.reject { |v| v.empty? }.join("<br>")
	      render :edit
	    end
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

	def reorder
		params[:products].each do |id, ordering_hash|
			product = Product.find(id)
			if product.present?
				product.update(ordering: ordering_hash["ordering"])
			end
		end
	end

	private

	def set_product
		@product = Product.includes(:varieties, varieties: :features).with_attached_images.find(params[:id])
	end

	def twin_product_params
		params.require(:product).permit(:twin_id, :category_id, :status)
	end

	def product_params
		params.require(:product).permit(:twin_id, :category_id, :ordering, :en_name, :zh_name, :en_description, :zh_description, :status, :file, images: [])
	end
end
