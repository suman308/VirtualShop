Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    
    
    resources :users, only: [:create, :edit, :update]
    resource :session, only: [:create, :destroy, :show]
    
  end

  root "static_pages#root"
end
