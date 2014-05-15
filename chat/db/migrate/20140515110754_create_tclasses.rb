class CreateTclasses < ActiveRecord::Migration
  def change
    create_table :tclasses do |t|
      t.string :name
      t.string :start
      t.string :end
      t.text :desc
      t.integer :count
			t.references :course, index: true
      t.timestamps
    end
  end
end
