require 'spec_helper'

describe "m_tests/show" do
  before(:each) do
    @m_test = assign(:m_test, stub_model(MTest,
      :name => "Name",
      :desc => "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/MyText/)
  end
end
