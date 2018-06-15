class Category < ApplicationRecord
	acts_as_nested_set
	has_many :products

	def self.total_level
		4
	end
end