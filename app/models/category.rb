class Category < ApplicationRecord
	scope :brand, -> { where(depth: 1) }
	scope :series, -> { where(depth: 2) }
	scope :collection, -> { where(depth: 3) }

	validates :zh_name, presence: true, unless: Proc.new { |c| c.en_name.present? }
	acts_as_nested_set
	has_many :products
	has_one_attached :cover
	attr_accessor :remove_cover

	def self.total_level
		3
	end

	def name
		if en_name.present? && zh_name.present?
			I18n.locale == :en ? en_name : zh_name
		else
			en_name.present? ? en_name : zh_name
		end
	end
end