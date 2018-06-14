require 'test_helper'

class CategoryControllerTest < ActionDispatch::IntegrationTest
  test "should get name:string" do
    get category_name:string_url
    assert_response :success
  end

end
