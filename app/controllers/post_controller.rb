class PostController < ApplicationController

    def index
        @posts = Post.all
    end
    
    def create
         @Post = Post.create(post_params)        
    end

    private
    def post_params
        params.permit(:image)
    end
end
