class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :en_name
      t.string :zh_name
      t.text :en_description
      t.text :zh_description
      t.integer :status, default: 0
      t.integer :category_id, null: false, index: true, foreign_key: true

      t.timestamps
    end
  end
end
