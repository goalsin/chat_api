class CreateMTests < ActiveRecord::Migration
  def change
    create_table :m_tests do |t|
      t.string :name
      t.text :desc

      t.timestamps
    end
  end
end
