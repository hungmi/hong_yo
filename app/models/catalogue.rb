class Catalogue < ApplicationRecord
	validates :zh_name, presence: true, unless: Proc.new { |c| c.en_name.present? }
	enum status: { draft: 0, published: 1 }
	has_one_attached :file
	attr_accessor :remove_file

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
end
