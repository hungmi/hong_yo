Rails.application.routes.draw do
  namespace :admin do
    root to: "pages#home"
    get "pages/home"
    resources :stories
    resources :products
  	resources :catalogues
  	resources :categories
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
