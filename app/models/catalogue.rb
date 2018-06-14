class Catalogue < ApplicationRecord
	validates :name, presence: true
	enum status: { draft: 0, published: 1 }
	has_one_attached :file
	attr_accessor :remove_file
end
