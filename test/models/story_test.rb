require 'test_helper'

class StoryTest < ActiveSupport::TestCase
	def setup
    @story = stories(:one)
  end

  test "it should have a title" do
    assert @story.valid?
  end
end
