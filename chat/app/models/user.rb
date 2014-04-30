class User < ActiveRecord::Base
	attr_accessible :email, :password
	
	has_one :api_key, dependent: :destroy

  after_create :create_api_key
		
  private

  def create_api_key
    k = ApiKey.create :user => self
		k.save!
  end
	
end
