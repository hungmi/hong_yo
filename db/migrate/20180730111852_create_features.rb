class CreateFeatures < ActiveRecord::Migration[5.2]
  def change
    create_table :features do |t|
    	t.string :zh_name
      t.string :en_name
      t.text :zh_value
      t.text :en_value
      t.integer :variety_id, null: false, index: true, foreign_key: true

      t.timestamps
    end
  end
end
