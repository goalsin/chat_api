require 'spec_helper'

describe "m_tests/index" do
  before(:each) do
    assign(:m_tests, [
      stub_model(MTest,
        :name => "Name",
        :desc => "MyText"
      ),
      stub_model(MTest,
        :name => "Name",
        :desc => "MyText"
      )
    ])
  end

  it "renders a list of m_tests" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end
