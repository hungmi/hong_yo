module ApplicationHelper
	def render_chinese_class(str)
    if !!(str =~ /\p{Han}|\p{Katakana}|\p{Hiragana}|\p{Hangul}/)
      'chinese'
    end
  end
end
