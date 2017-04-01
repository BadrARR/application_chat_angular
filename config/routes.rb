Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
# API routes path
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      #devise_for :users
      resources :users, :only => [:show, :create]
      resources :messages, :only => [:show, :create, :edit, :update, :destroy]
      resources :participations, :only => [:show, :create, :edit, :update, :destroy]
      resources :users, :only => [:index, :show, :create, :edit, :update, :destroy]
      resources :conversations #, :only => [:show, :create, :edit, :update, :destroy]
    end
  end  
end
