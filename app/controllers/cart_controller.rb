class CartController < ApplicationController
    def index 
        return nil if !current_user 
        @cart_items = Cart.all.select {
            |cart_items| cart_items.user_id == current_user
        }

        render :index 
    end 
end
