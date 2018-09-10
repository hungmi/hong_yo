class Variety < ApplicationRecord
	validates :zh_name, presence: { message: "中文、英文名稱至少需填寫一個。" }, unless: Proc.new { |s| s.en_name.present? }
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
			features.order(go_top: :desc, zh_name: :asc, en_name: :asc).map(&:name)
		else
			[]
		end
	end
end
