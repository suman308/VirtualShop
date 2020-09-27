class Api::SearchsController < ApplicationController
    def index 
        if product_params.name 
            @products = Product.search_name(product_params[:name]) 
        elsif product_params.category 
            @products = Product.search_category(product_params[:category]) 
        else 
            @products = Product.all 
        end 

        render :index 
    end





def product_params
 
    params.require(:search).require(:name, :category)
end 


end