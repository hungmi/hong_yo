class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.integer :status
      t.integer :category_id, index: true, foreign_key: true

      t.timestamps
    end
  end
end
