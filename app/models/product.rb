class Product < ApplicationRecord
	validates :zh_name, presence: { message: "中文、英文標題至少需填寫一個。" }, unless: Proc.new { |p| p.twins? || p.en_name.present? }
	belongs_to :category, counter_cache: true
	has_many :varieties
	has_many_attached :images
	has_one_attached :file
	enum status: { draft: 0, published: 1 }

	belongs_to :twin, class_name: "Product", foreign_key: "twin_id", optional: true
	scope :alone, -> { where(twin_id: nil) }
	before_save :clean_twin_data

	def twins?
		twin_id.present?
	end

	def clean_twin_data
		if twins?
			self.zh_name = nil
			self.en_name = nil
			self.zh_description = nil
			self.en_description = nil
		end
	end

	def name
		p = twins? ? self.twin : self
		if p.en_name.present? && p.zh_name.present?
			I18n.locale == :en ? p.en_name : p.zh_name
		else
			p.en_name.present? ? p.en_name : p.zh_name
		end
	end

	def t_images
		twins? ? twin.images : images
	end

	def t_file
		twins? ? twin.file : file
	end

	def admin_name
		self.twins? ? name + "(複製)" : name
	end

	def description
		p = twins? ? self.twin : self
		if p.en_description.present? && p.zh_description.present?
			I18n.locale == :en ? p.en_description : p.zh_description
		else
			p.en_description.present? ? p.en_description : p.zh_description
		end
	end

	def all_variety_feature_names
		p = twins? ? self.twin : self
		if p.varieties.present?
			p.varieties.map do |va|
				va.all_feature_names
			end
		else
			[]
		end
	end
end
