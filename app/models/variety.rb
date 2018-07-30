class Variety < ApplicationRecord
	validates :zh_name, presence: true, unless: Proc.new { |p| p.en_name.present? }
	belongs_to :product

	def name
		if en_name.present? && zh_name.present?
			I18n.locale == :en ? en_name : zh_name
		else
			en_name.present? ? en_name : zh_name
		end
	end
end
