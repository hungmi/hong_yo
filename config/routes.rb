Rails.application.routes.draw do
  get 'pages/home'
  get 'pages/about'
  get 'pages/products'
  get 'pages/contact'
  get 'pages/download'
	root "pages#home"
	scope "(:locale)", locale: /en|zh-TW/ do
		root "pages#home"
		controller :pages do
			get 'home', to: "pages#home"
			get 'about', to: "pages#about"
		  get 'products', to: "pages#products"
		  get 'contact', to: "pages#contact"
		  get 'download', to: "pages#download"
		end
	end
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
