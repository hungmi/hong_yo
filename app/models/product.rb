class Product < ApplicationRecord
	belongs_to :category
	has_many_attached :images
	enum status: { draft: 0, published: 1 }
end
