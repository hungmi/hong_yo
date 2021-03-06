class CreateCategories < ActiveRecord::Migration[5.2]
	def self.up
    create_table :categories do |t|
      t.string :en_name
      t.string :zh_name
      t.text :en_description
      t.text :zh_description
      t.integer :products_count, default: 0
      t.integer :parent_id, :null => true, :index => true
      t.integer :lft, :null => false, :index => true
      t.integer :rgt, :null => false, :index => true

      # optional fields
      t.integer :depth, :null => false, :default => 0
      t.integer :children_count, :null => false, :default => 0

      t.timestamps
    end
  end
end
