class AddGoTopToFeatures < ActiveRecord::Migration[5.2]
  def change
    add_column :features, :go_top, :boolean, default: false
  end
end
