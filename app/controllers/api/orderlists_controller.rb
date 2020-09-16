class Api::OrderlistsController < ApplicationController
    before_action :require_login, only:[:show, :update, :create]
    def index 
        @OrderLists = OrderList.all.select{|order_item| order_item.cart_id == param[:cart_id]}
        if @OrderLists 
            render :index
        else  
            render json: @OrderLists.errorrs.full_messages, status: 422
        end 
    end 

    def show  
        @OrderList = OrderList.find_by(id: params[:id])
        
        render 'api/orderlists/show'
    end 

    def create 
        @OrderList= OrderList.create!(OrderListParams)
       if  @OrderList.save!
            render 'api/orderlists/show'
       else 
            render json: @OrderList.errorrs.full_messages, status: 422
       end 

    end 

    def delete
        @OrderList = OrderList.find_by(Id: params[:id])
        if @OrderList 
            @OrderList.destroy 
        else 
            render json: @OrderList.errorrs.full_messages, status: 422
        end 
    end 

    private 
    def OrderListParams 
        params.premit(:OrderList).require(:product_id, :cart_id)
    end 
end
