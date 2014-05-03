module Api
	module V1
		class UsersController < ApplicationController
			
			skip_before_filter :restrict_access, only: [:list,:login]
			
			def login
				@user = User.login_now(params[:email], params[:password])
				
			end
			
			def index
	      render json: {message: 'Resource not found'}
	    end
			
			
			def test
	      render json: {message: 'test not found'}
	    end
			
			def list
				@users = User.all
				@user = User.first
				# Jbuilder.encode do |json|
# 				  
# 
# 					json.array! @people do |person|
# 					  json.name person.email
# 					  json.age person.password
# 					end				  
# 				end
				
	    end
			
		end
	end
end
