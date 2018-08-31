require "rails_helper"

RSpec.describe Category, :type => :model do
  context "normal behavior" do
    it "only need a name to be created successfully" do
      category = Category.create(en_name: "testRoot")
      category_zh = Category.create(zh_name: "中文目錄")
      expect(category).to be_valid
      expect(category_zh).to be_valid
    end

    it "can have children" do
    	category = Category.create(en_name: "testRoot")
    	child = Category.new(en_name: "child")
    	child.parent = category
    	expect(child.save).to be true
    end

    it "is destroyed and so does its children" do
    	category = Category.create(en_name: "testRoot")
    	3.times do
    		Category.create(en_name: "child", parent_id: category.id)
    	end
    	expect(Category.all.size).to eq 4
    	category.destroy!
    	expect(Category.all.size).to eq 0
  	end

  	it "is destroyed and so does its grandsons" do
    	category = Category.create(en_name: "testRoot")
    	3.times do
    		@child = Category.create(en_name: "child", parent_id: category.id)
    	end
    	5.times do
    		grandson = Category.create(en_name: "grand", parent_id: @child.id)
    	end
    	expect(Category.all.size).to eq 9
    	category.destroy!
    	expect(Category.all.size).to eq 0
  	end
  end

  context "with products" do
  	it "when a child is destroyed, only its children are destroyed, no others." do
  		category = Category.create(en_name: "testRoot")
    	3.times do
    		@child = Category.create(en_name: "child", parent_id: category.id)
    	end
    	5.times do
    		grandson = Category.create(en_name: "grand", parent_id: @child.id)
    	end
    	expect(Category.all.size).to eq 9
    	all_category_ids = Category.all.pluck(:id)
    	destroying_target = Category.where(parent_id: category.id).first
    	should_be_detroyed_children_ids = destroying_target.children.pluck(:id)
    	destroying_target.destroy!
    	expect(Category.all.pluck(:id).sort).to eq (all_category_ids - should_be_detroyed_children_ids - [destroying_target.id]).sort
  	end

  	# it "can have products only when its at bottom level" do
  	# 	top_category = Category.create(en_name: "testRoot")
  	# 	mid_category = Category.create(en_name: "testRoot", parent_id: top_category.id)
  	# 	bottom_category = Category.create(en_name: "testRoot", parent_id: bottom_category.id)
  	# end

  	it "deletes all products of itself and its leaves when it's destroyed" do
  		top_category = Category.create(en_name: "testRoot")
  		mid_category = Category.create(en_name: "testRoot", parent_id: top_category.id)
  		bottom_category = Category.create(en_name: "testRoot", parent_id: mid_category.id)
  		5.times do
  			bottom_category.products.create(en_name: "Product")
  		end
  		expect(Product.all.size).to eq 5
  		expect(bottom_category.products.pluck(:id).sort).to eq Product.all.pluck(:id).sort
  		top_category.reload
  		top_category.destroy_itself_and_children_and_products!
  		expect(Product.all.size).to eq 0
  		expect(Category.find_by_id(top_category.id)).to be nil
  	end
  end
end