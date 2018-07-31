class Product < ApplicationRecord
	validates :zh_name, presence: true, unless: Proc.new { |p| p.en_name.present? }
	belongs_to :category
	has_many :varieties
	has_many_attached :images
	has_one_attached :file
	enum status: { draft: 0, published: 1 }

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

	def all_variety_feature_names
		if varieties.present?
			varieties.map do |va|
				va.all_feature_names
			end
		else
			[]
		end
	end
end
