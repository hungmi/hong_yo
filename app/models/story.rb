class Story < ApplicationRecord
	validates :title, presence: true
	enum status: { draft: 0, published: 1 }
end
