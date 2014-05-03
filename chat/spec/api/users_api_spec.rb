require 'spec_helper'
require 'api/api_helper'
require 'fakeweb'
require 'timecop'

describe 'Users API' do

  before :each do
    # FactoryGirl.create :integration
   #  FactoryGirl.create :project
   #  FactoryGirl.create :task
   #  Project.last.integrations << Integration.last
  end

  # GET /tasks/:id
  it 'should return a login' do
    api_get "login", {email:'shiren1118@126.com',password:'000000'}
    response.status.should == 200
    h = JSON.parse(response.body)
		puts h
    h['status']['code'].should == 0
    h['data'].length.should == 2
    # h['data'].first["id"].should == doc1.id
    # project = JSON.parse(response.body)
 #    project['id'].should == Task.last.id
 #    project['project_id'].should == Task.last.project_id
 #    project['source_name'].should == Task.last.source_name
 #    project['source_identifier'].should == Task.last.source_identifier
 #    project['current_state'].should == Task.last.current_state
 #    project['story_type'].should == Task.last.story_type
 #    project['current_task'].should == Task.last.current_task
 #    project['name'].should == Task.last.name
  end
end