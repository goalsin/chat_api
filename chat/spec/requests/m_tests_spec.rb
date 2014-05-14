require 'spec_helper'

describe "MTests" do
  describe "GET /m_tests" do
    it "works! (now write some real specs)" do
      get m_tests_path
      expect(response.status).to be(200)
    end
  end
end
