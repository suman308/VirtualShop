class Api::CartsController < ApplicationController
    def index 
        @carts = Cart.all.select{ |cart| cart.user_id == current_user.id}
        render 'api/carts/index'
    else 
        render json: @carts.errors.full_messages, status: 422
    end 

    def show 
        @cart = Cart.find_by(id: params[:id])
        render 'api/carts/show'
    else 
        render json: @cart.errors.full_messages, status: 422
    end 
end
