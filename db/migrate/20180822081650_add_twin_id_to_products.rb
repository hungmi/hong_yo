class AddTwinIdToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :twin_id, :integer
  end
end
