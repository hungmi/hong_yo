class AddPublishDateToStories < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :publish_date, :date
  end
end
