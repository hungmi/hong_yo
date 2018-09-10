class Product < ApplicationRecord
	validates :zh_name, presence: { message: "中文、英文標題至少需填寫一個。" }, unless: Proc.new { |p| p.twins? || p.en_name.present? }
	belongs_to :category, counter_cache: true
	has_many :varieties, dependent: :destroy
	has_many_attached :images
	has_one_attached :file
	enum status: { draft: 0, published: 1 }

	belongs_to :twin, class_name: "Product", foreign_key: "twin_id", optional: true
	scope :alone, -> { where(twin_id: nil) }
	after_destroy :detroy_twins!

	def twins?
		twin_id.present?
	end

	def detroy_twins!
		# puts "callback is called"
		twins = Product.where(twin_id: self.id)
		if twins.present?
			twins.map(&:destroy!)
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
			top_features = p.varieties.map do |va|
				va.top_feature_names
			end
			normal_features = p.varieties.map do |va|
				va.normal_feature_names
			end
			top_features.flatten.uniq.sort_by!{ |m| m.downcase } + normal_features.flatten.uniq.sort_by!{ |m| m.downcase }
		else
			[]
		end
	end
end
