class ContactMailerPreview < ActionMailer::Preview
  def contact
    ContactMailer.contact({
    	"name"=>"hungmi",
    	"title"=>"",
    	"organization"=>"",
    	"country"=>"Taiwan",
    	"address"=>"",
    	"phone"=>"",
    	"fax"=>"",
    	"email"=>"hungmihungmi@gmail.com",
    	"content"=>"hi this is a content",
    })
  end
end