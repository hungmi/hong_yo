class CreateVarieties < ActiveRecord::Migration[5.2]
  def change
    create_table :varieties do |t|
      t.string :zh_name
      t.string :en_name
      t.integer :product_id, null: false, index: true, foreign_key: true

      t.timestamps
    end
  end
end
