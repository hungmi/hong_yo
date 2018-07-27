class PagesController < ApplicationController
  def home
  end

  def about
  end

  def products
    @products = Product.all.order(id: :desc).limit(10)
  end

  def contact_us
  end

  def download
    @custom_footer = true
  end
end
