class Api::CartController < ApplicationController
    def index 
        @carts = Cart.all.select{ |cart| cart.user_id == current_user.id}
        render :index
    end 

    def show 
        @cart = Cart.find_by(id: params[:id])
    end 
end
