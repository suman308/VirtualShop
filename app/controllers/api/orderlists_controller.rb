class Api::OrderlistsController < ApplicationController
    before_action :logged_in?, only:[:show, :update, :create]
    def index 
        @orderlists = OrderList.all.select{|order_item| order_item.cart_id == params[:cart_id]}
        if @orderlists 
            render :index
        else  
            render json: @orderlists.errorrs.full_messages, status: 422
        end 
    end 

    def show  
        @orderlist = OrderList.find_by(id: params[:id])
        
        render 'api/orderlists/show'
    end 

    def create 
        debugger
        @orderlist= OrderList.new(orderlistParams)
        debugger
       if  @orderlist.save!
            render 'api/orderlists/show'
       else 
            render json: @orderlist.errorrs.full_messages, status: 422
       end 

    end 

    def delete
        @orderlist = OrderList.find_by(Id: params[:id])
        if @orderlist 
            @orderlist.destroy 
        else 
            render json: @orderlist.errorrs.full_messages, status: 422
        end 
    end 

    private 
    def orderlistParams 
        debugger 
        params.permit(:OrderList).require(:product_id, :cart_id, :quantity, :checked_out)
        debugger 
    end 
end
