class Admin::VarietiesController < ApplicationController
	layout 'admin'
	before_action :set_variety, except: [:index, :create, :new]

	def index
		@nav_title = "最新消息"
		@varieties = Variety.all.order(id: :desc)
	end

	def new
		@variety = Variety.new
	end

	def create
		@variety = Variety.new(variety_params)
		if @variety.save
      flash[:success] = "建立成功。 "
      redirect_to edit_admin_variety_url(@variety)
    else
      render :new
    end
	end

	def show
	end

	def edit
	end

	def update
		if @variety.update(variety_params)
      flash[:success] = "更新成功。 "
      redirect_to edit_admin_variety_url(@variety)
    else
      render :edit
    end
	end

	def destroy
		if @variety.destroy
			flash[:success] = "刪除成功。"
		else
			flash[:danger] = "刪除失敗。"
		end
		redirect_to edit_admin_product_url(@variety.product)
	end

	private

	def set_variety
		@variety = Variety.find(params[:id])
		@product = Product.find_by_id(params[:product_id])
	end

	def variety_params
		params.require(:variety).permit(:en_name, :zh_name, features_attributes: [:id, :zh_name, :en_name, :zh_value, :en_value, :_destroy])
	end
end