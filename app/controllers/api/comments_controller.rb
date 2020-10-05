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
        @comment = Comment.find(params[:id])
        if @comment 
            render :show 
        else 
            render json: @comment.errorrs.full_messages, status: 422 
        end 
    end 

    def edit 
        @comment 
    end 
end
