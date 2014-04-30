class User < ActiveRecord::Base
	attr_accessible :email, :password
	
	has_one :api_key, dependent: :destroy

  after_create :create_api_key
	
	def self.login_now(email,password)
		find_by_email_and_password(email ,password)
	end
	
  private

  def create_api_key
    k = ApiKey.create :user => self
		k.save!
  end
	
end
