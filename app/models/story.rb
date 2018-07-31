class Story < ApplicationRecord
	validates :zh_title, presence: { message: "中文、英文標題至少需填寫一個。" }, unless: Proc.new { |s| s.en_title.present? }
	enum status: { draft: 0, published: 1 }
	has_one_attached :cover
	attr_accessor :remove_cover

	def try_cover
		cover.attached? ? cover : "/img/about/fake_news1.png"
	end

	def title
		if en_title.present? && zh_title.present?
			I18n.locale == :en ? en_title : zh_title
		else
			en_title.present? ? en_title : zh_title
		end
	end

	def content
		if en_content.present? && zh_content.present?
			I18n.locale == :en ? en_content : zh_content
		else
			en_content.present? ? en_content : zh_content
		end
	end
end
