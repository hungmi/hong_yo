class Feature < ApplicationRecord
	validates :zh_name, presence: true, unless: Proc.new { |p| p.en_name.present? }
	belongs_to :variety

	def name
		if en_name.present? && zh_name.present?
			I18n.locale == :en ? en_name : zh_name
		else
			en_name.present? ? en_name : zh_name
		end
	end

	def value
		if en_value.present? && zh_value.present?
			I18n.locale == :en ? en_value : zh_value
		else
			en_value.present? ? en_value : zh_value
		end
	end
end
