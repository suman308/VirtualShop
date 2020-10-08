class Api::CommentsController < ApplicationController
   before_action :logged_in?, only:[  :create]
    def index 
        @comments = Comment.where("product_id = ?", params[:productId])
        if @comments 
            
            render :index 
        else 
            render json: @comments.errorrs.full_messages, status: 422 
        end 
    end 

    def show 
        @comment = Comment.find(params[:Id])
        if @comment 
            render :show 
        else 
            render json: @comment.errorrs.full_messages, status: 422 
        end 
    end 

    def edit 
        @comment 
    end 

    def create 
       debugger
        @comment = Comment.new(params_params)
        if @comment 
            @comment.save!
           debugger 
            render :show
        else 
           debugger 
            render json: @comment.errorrs.full_messages, status: 422 
        end 
    end 
    def params_params 
        debugger 
        params.require(:comment).permit(:product_id, :body, :user_id, :id)
    end 
end

