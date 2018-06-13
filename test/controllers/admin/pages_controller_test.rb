require 'test_helper'

class Admin::PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get admin_pages_home_url
    assert_response :success
  end

  test "should get home at root" do
    get admin_root_url
    assert_response :success
  end

end
