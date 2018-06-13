class Admin::CataloguesController < ApplicationController
	layout 'admin'
	before_action :set_catalogue, except: [:index, :create, :new]

	def index
		@nav_title = "產品目錄"
		@catalogues = Catalogue.all.order(id: :asc)
	end

	def new
		@catalogue = Catalogue.new(catalogue_params)
	end

	def create
		@catalogue = Catalogue.new(catalogue_params)
		if @catalogue.save
      flash[:success] = "建立成功。 "
      redirect_to [:admin, :index]
    else
      render :new
    end
	end

	def show
	end

	def edit
	end

	def update
		if @catalogue.update(catalogue_params)
      flash[:success] = "更新成功。"
      redirect_to admin_catalogues_url
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
		params.require(:catalogue).permit(:name, :description, :status, :file)
	end
end