require 'spec_helper'
require 'api/api_helper'
require 'fakeweb'
require 'timecop'


describe "GET /api/v1/logindddd" do

	before(:each) do
	  @user = User.create(:email=>'shiren1118@126.com',:password => "000000")
	end

  it 'should return a login' do
    get '/api/v1/login?email=shiren1118@126.com&password=000000'
		# puts response.body
		# puts Rails.env
    expect(response.status).to be(200)
	
		token = MultiJson.decode(response.body)['token']
	 	# expect(token.length).not_to eq(321)
  end
end
