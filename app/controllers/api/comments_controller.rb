class Api::CommentsController < ApplicationController

    def index 
        @comments = Comment.all
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
        params.require(:comment).permit(:product_Id, :body, :user_id, :Id)
    end 
end

