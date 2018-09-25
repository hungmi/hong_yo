class AddOrderingToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :ordering, :integer
  end
end
