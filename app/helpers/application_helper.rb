module ApplicationHelper
	def render_chinese_class(str)
    if !!(str =~ /\p{Han}|\p{Katakana}|\p{Hiragana}|\p{Hangul}/)
      'chinese'
    end
  end

  def turbolinks_cache_control_meta_tag
	  tag :meta, name: 'turbolinks-cache-control', content: @turbolinks_cache_control || 'cache'
	end

	def notice_message(opts = {})
	  if flash.any?
	    flash.map do |type, message|
	      content_tag :div, class: "alert alert-#{type}", role:'alert' do
	        content_tag :strong, type.capitalize
	        message.html_safe
	      end
	    end[0]
	  end
	end
end
