class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.text :content
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
