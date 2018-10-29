class ContactMailer < ApplicationMailer
	def contact(info)
		@info = info
    # @user = params[:user]
    # @url  = 'http://example.com/login'
    receiver = if Rails.env.production?
    	"richard@advantec.com.tw"
    else
    	"test@advantec.com.tw"
    end
    guest_name = info[:name] || info[:email]
    mail(to: receiver, subject: "網站有訪客 #{guest_name} 來信 #{Time.zone.now.strftime('%F %H:%M')}")
  end

  def backup
  	
  end
end
