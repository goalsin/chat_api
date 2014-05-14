require 'spec_helper'

describe "m_tests/edit" do
  before(:each) do
    @m_test = assign(:m_test, stub_model(MTest,
      :name => "MyString",
      :desc => "MyText"
    ))
  end

  it "renders the edit m_test form" do
    render

    assert_select "form[action=?][method=?]", m_test_path(@m_test), "post" do
      assert_select "input#m_test_name[name=?]", "m_test[name]"
      assert_select "textarea#m_test_desc[name=?]", "m_test[desc]"
    end
  end
end
