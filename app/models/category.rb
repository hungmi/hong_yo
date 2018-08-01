class Category < ApplicationRecord
	scope :brand, -> { where(depth: 1) }
	scope :series, -> { where(depth: 2) }

	validates :zh_name, presence: { message: "中文、英文名稱至少需填寫一個。" }, unless: Proc.new { |s| s.en_name.present? }
	acts_as_nested_set
	has_many :products
	has_one_attached :cover
	has_one_attached :product_cover

	def self.available_levels
		[["總類", self.roots.pluck(:zh_name, :id)], ["品牌", self.brand.pluck(:zh_name, :id)], ["系列", self.series.pluck(:zh_name, :id)]]
	end

	def self.total_level
		2 # root = 0
	end

	def ancestors_names
		self_and_ancestors.pluck(:zh_name).join(" - ")
	end

	def name
		if en_name.present? && zh_name.present?
			I18n.locale == :en ? en_name : zh_name
		else
			en_name.present? ? en_name : zh_name
		end
	end

	def description
		if en_description.present? && zh_description.present?
			I18n.locale == :en ? en_description : zh_description
		else
			en_description.present? ? en_description : zh_description
		end
	end

	def try_cover
		cover.attached? ? cover : '/img/products/product1_p_471x450.png'
	end

	def try_product_cover
		product_cover.attached? ? product_cover : '/img/products/product1_360x450.png'
	end
end