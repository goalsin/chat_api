require 'spec_helper'


describe "TokenLogins" do
  describe "GET /api/v1/login" do

		before(:each) do
		  @user = User.create(:email=>'shiren1118@126.com',:password => "000000")
		end
		
    it "works! (now write some real specs)" do
      get '/api/v1/login?email=shiren1118@126.com&password=000000'
			# puts response.body
			# puts Rails.env
      expect(response.status).to be(200)
			
			
			# token = MultiJson.decode(response.body)['token']
		 	# expect(token.length).not_to eq(32)
			
			# expect(token.lengthss).to eq(321)
    end
  end
end
