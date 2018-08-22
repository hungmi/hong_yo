class PagesController < ApplicationController
  def home
    @stories = Story.order(updated_at: :desc).with_attached_cover.published.limit(3)
  end

  def about
    @stories = Story.order(updated_at: :desc).published
  end

  def products
    @root = Category.find_by_id(params[:root_id]) || Category.root
    @products = if @root.present?
      Product.where(category_id: @root.leaves.pluck(:id))
    else
      Product
    end.includes(:category, category: :parent).with_attached_images.published.order(id: :desc).limit(36)
  end

  def contact_us
  end

  def download
    @custom_footer = true
    @catalogues = Catalogue.with_attached_file.order(id: :desc).published.select { |c| c.file.attached? }
  end
end
