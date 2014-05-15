class Course < ActiveRecord::Base
	belongs_to :user
	
	has_many :tclasses, dependent: :destroy
	
	
end
