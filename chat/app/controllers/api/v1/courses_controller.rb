module Api
	module V1
		class CoursesController < ApplicationController
	    # t.string   "name"
	    # t.text     "desciption"
	    # t.text     "document"
	    # t.string   "author"
	    # t.integer  "user_id"

			before_filter :restrict_access 
			
			def new
				
			end
			
			def create
				# puts course_params
				puts @current_user
				c1 = Course.create(
					:name=>params[:name],
					:desciption=>params[:desciption],
					:document=>params[:document],
					:author=>params[:author]
				)
				
				c1.user = @current_user	
				r = c1.save
				
				render json: {message: r}
			end
			
			def show
				render json: {message: 'dsss'}
			end
			
			
			def get
				@course = Course.find(params[:id])
				@user = @course.user;
			end
			
			
		  def index
		    @courses = Course.all
		  end
			
		end #end class
	end #end V1
end
