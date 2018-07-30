module ApplicationHelper
	def render_chinese_class(str)
    if !!(str =~ /\p{Han}|\p{Katakana}|\p{Hiragana}|\p{Hangul}/)
      'chinese'
    end
  end

  def turbolinks_cache_control_meta_tag
	  tag :meta, name: 'turbolinks-cache-control', content: @turbolinks_cache_control || 'cache'
	end
end
