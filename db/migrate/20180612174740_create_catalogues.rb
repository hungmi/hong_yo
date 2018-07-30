class CreateCatalogues < ActiveRecord::Migration[5.2]
  def change
    create_table :catalogues do |t|
      t.string :en_name
      t.string :zh_name
      t.text :en_description
      t.text :zh_description
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
