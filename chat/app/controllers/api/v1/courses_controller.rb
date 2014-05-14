module Api
	module V1
		class CoursesController < ApplicationController
			
			before_filter :restrict_access 
			
			def new
				
			end
			
			def create
				puts @current_user
				c1 = Course.create(:name=>'first c')
				c1.user = @current_user	
				r = c1.save
				
				render json: {message: r}
			end
			
			def show
				render json: {message: 'dsss'}
			end
			
			
		end #end class
	end #end V1
end
