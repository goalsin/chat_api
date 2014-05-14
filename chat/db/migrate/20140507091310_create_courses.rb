class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :name
      t.text :desciption
      t.text :document
      t.string :author
			t.references :user, index: true
      t.timestamps
    end
  end
end
