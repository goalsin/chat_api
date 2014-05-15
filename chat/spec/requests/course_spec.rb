require 'spec_helper'


describe "TokenLogins" do
  describe "GET /api/v1/create_course" do

		before(:each) do
		  @user = User.create(:email=>'shiren1118@126.com',:password => "000000")
			@token = @user.api_key.token
		end
		
    it "创建课程! (now create course)" do
	    # t.string   "name"	    
	    # t.text     "desciption"
	    # t.text     "document"
	    # t.string   "author"
	    # t.integer  "user_id"

			user_param = {
				:name => 'how to study nodejs',
				:desciption => 'alfred sang',
				:document => 'document',
				:author => 'author'
			}.map{|k,v| "#{k}=#{v}"}.join('&').to_s
		
			url = URI.encode("/api/v1/create_course?token=#{@token}&#{user_param}" )
			
      get url
			
			# puts response.body
			# puts Rails.env
      expect(response.status).to be(200)
			
			# token = MultiJson.decode(response.body)['token']
		 	# expect(token.length).not_to eq(32)
			
			# expect(token.lengthss).to eq(321)
    end
  end
end