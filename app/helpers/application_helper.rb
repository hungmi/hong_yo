module ApplicationHelper
	def render_chinese_class(str)
    if !!(str =~ /\p{Han}|\p{Katakana}|\p{Hiragana}|\p{Hangul}/)
      'chinese'
    end
  end

  def render_chinese_class_loop(str)
  	output_html = ""
  	if str.size > 0
	  	str.each_char do |chr|
		    if !!(chr =~ /\p{Han}|\p{Katakana}|\p{Hiragana}|\p{Hangul}/)
		      output_html += (content_tag :span, chr, class: "chinese")
		    else
		    	output_html += chr
		    end
		  end
		end
	  output_html.html_safe
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

	def in_admin?
		controller.class.parent.to_s.downcase == "admin"
	end
end
