class Admin::CataloguesController < AdminController
	layout 'admin'
	before_action :set_catalogue, except: [:index, :create, :new]

	def index
		disable_turbolinks_cache
		@nav_title = "產品目錄"
		@catalogues = Catalogue.all.order(updated_at: :desc, id: :desc)
	end

	def new
		@catalogue = Catalogue.new
	end

	def create
		@catalogue = Catalogue.new(catalogue_params.except(:file))
		if @catalogue.save
			if catalogue_params.has_key?(:file)
				if catalogue_params[:file].blank? && @catalogue.file.attached?
					@catalogue.file.purge_later
				else
					@catalogue.file.attach(catalogue_params[:file])
				end
			end
      flash[:success] = "建立成功。 "
      redirect_to admin_catalogues_url
    else
    	flash.now[:danger] = @catalogue.errors.messages.values.reject { |v| v.empty? }.join("<br>")
      render :new
    end
	end

	def show
	end

	def edit
	end

	def update
		if @catalogue.update(catalogue_params.except(:file))
			if catalogue_params.has_key?(:file)
				if catalogue_params[:file].blank? && @catalogue.file.attached?
					@catalogue.file.purge_later
				else
					@catalogue.file.attach(catalogue_params[:file])
				end
			end
      flash[:success] = "更新成功。"
      redirect_to admin_catalogues_url
    else
    	flash.now[:danger] = @catalogue.errors.messages.values.reject { |v| v.empty? }.join("<br>")
      render :edit
    end
	end

	def destroy
		if @catalogue.destroy
			flash[:success] = "刪除成功。"
		else
			flash[:danger] = "刪除失敗。"
		end
		redirect_to admin_catalogues_url
	end

	private

	def set_catalogue
		@catalogue = Catalogue.find(params[:id])
	end

	def catalogue_params
		params.require(:catalogue).permit(:en_name, :zh_name, :en_description, :zh_description, :status, :file, :remove_file)
	end
end