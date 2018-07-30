class PagesController < ApplicationController
  def home
    @stories = Story.order(updated_at: :desc).published.limit(3)
  end

  def about
    @stories = Story.order(updated_at: :desc).published
  end

  def products
    @products = Product.all.order(id: :desc).limit(36)
  end

  def contact_us
  end

  def download
    @custom_footer = true
    @catalogues = Catalogue.order(id: :desc).published.select { |c| c.file.attached? }
  end
end
