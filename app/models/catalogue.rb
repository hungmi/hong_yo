class Catalogue < ApplicationRecord
	validates :name, presence: true
	enum status: { draft: 0, published: 1 }
end
