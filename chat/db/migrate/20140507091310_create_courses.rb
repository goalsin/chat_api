class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string 			:name
			t.string 			:image
      t.text 				:desc
      t.text 				:document
      t.string 			:author
			t.integer 		:week
			t.float 			:price
			t.references :user, index: true
      t.timestamps
    end
  end
end
