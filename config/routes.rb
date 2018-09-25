Rails.application.routes.draw do
	root "pages#home"
	scope "(:locale)", locale: /en|zh-TW/ do
		root "pages#home"
		controller :pages do
			get 'home', to: "pages#home"
			get 'about', to: "pages#about"
		  get 'products', to: "pages#products"
		  get 'contact', to: "pages#contact_us"
		  get 'download', to: "pages#download"
		end
    resources :products
    resources :stories
    resources :catalogues
  	resources :categories do
      member do
        get "children", to: "categories#children"
        get "products", to: "categories#products"
      end
    end
    post 'contact_us', to: "contacts#create"
	end

  namespace :admin do
    root to: "pages#home"
    get "pages/home"
    resources :users, only: [:edit, :update]
    resources :stories
    resources :products do
      collection do
        post "reorder"
      end
    end
    resources :varieties, except: [:show]
  	resources :catalogues
  	resources :categories
    get 'signin', to: 'sessions#new'
    post 'signin', to: 'sessions#create'
    delete 'logout', to: 'sessions#destroy'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
