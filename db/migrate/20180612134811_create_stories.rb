class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :en_title
      t.string :zh_title
      t.text :en_content
      t.text :zh_content
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
