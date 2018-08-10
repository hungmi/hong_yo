class ContactsController < ApplicationController
  def create
  	contact_info = params.require(:contact).permit(:name, :title, :organization, :country, :address, :phone, :fax, :email, :content)
  	ContactMailer.contact(contact_info.to_h).deliver_later
  	respond_to do |format|
  		format.js
  	end
  end
end