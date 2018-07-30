class Admin::CataloguesController < ApplicationController
	layout 'admin'
	before_action :set_catalogue, except: [:index, :create, :new]

	def index
		@nav_title = "產品目錄"
		@catalogues = Catalogue.all.order(id: :desc)
	end

	def new
		@catalogue = Catalogue.new
	end

	def create
		@catalogue = Catalogue.new(catalogue_params)
		if @catalogue.save
      flash[:success] = "建立成功。 "
      redirect_to admin_catalogues_url
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
		catalogue_params2 = catalogue_params
		if catalogue_params.has_key?(:file) && catalogue_params[:file].blank?
			catalogue_params2 = catalogue_params.except(:file)
			@catalogue.file.purge_later if @catalogue.file.attached?
		end
		if @catalogue.update(catalogue_params2)
      flash[:success] = "更新成功。"
      redirect_to edit_admin_catalogue_url(@catalogue)
    else
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