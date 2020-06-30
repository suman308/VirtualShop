Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    
    
    resources :users, only: [:create, :edit, :update]  do
      resources :stores, only:[:create] 
    end 
     
    resource  :session, only: [:create, :destroy, :show]
    resources :products, only:[:index, :create, :show, :edit, :update, :destroy]
    resources :stores, only:[:show, :edit, :update]
    resources :carts, only:[:create, :show, :edit, :update]
    resources :orderlists, only:[:create, :show, :edit, :update]
  end

  root "static_pages#root"
end
