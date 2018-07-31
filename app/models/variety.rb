class Variety < ApplicationRecord
	validates :zh_name, presence: true, unless: Proc.new { |p| p.en_name.present? }
	belongs_to :product
	has_many :features, dependent: :destroy
	accepts_nested_attributes_for :features, reject_if: :all_blank, allow_destroy: true

	def name
		if en_name.present? && zh_name.present?
			I18n.locale == :en ? en_name : zh_name
		else
			en_name.present? ? en_name : zh_name
		end
	end

	def all_feature_names
		if features.present?
			features.map do |feature|
				feature.name
			end
		else
			[]
		end
	end
end
