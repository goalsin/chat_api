require 'spec_helper'

describe "m_tests/new" do
  before(:each) do
    assign(:m_test, stub_model(MTest,
      :name => "MyString",
      :desc => "MyText"
    ).as_new_record)
  end

  it "renders new m_test form" do
    render

    assert_select "form[action=?][method=?]", m_tests_path, "post" do
      assert_select "input#m_test_name[name=?]", "m_test[name]"
      assert_select "textarea#m_test_desc[name=?]", "m_test[desc]"
    end
  end
end
