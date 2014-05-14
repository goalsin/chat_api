require "spec_helper"

describe MTestsController do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/m_tests").to route_to("m_tests#index")
    end

    it "routes to #new" do
      expect(:get => "/m_tests/new").to route_to("m_tests#new")
    end

    it "routes to #show" do
      expect(:get => "/m_tests/1").to route_to("m_tests#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/m_tests/1/edit").to route_to("m_tests#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/m_tests").to route_to("m_tests#create")
    end

    it "routes to #update" do
      expect(:put => "/m_tests/1").to route_to("m_tests#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/m_tests/1").to route_to("m_tests#destroy", :id => "1")
    end

  end
end
