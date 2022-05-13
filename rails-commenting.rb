# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)On line 10, the child class here is BlogPostController and it is inheriting from the parent class called ApplicationController. This is also the controller and the logical place of the application. On line 11, we are defining a method called "index". Def stands for define.
class BlogPostsController < ApplicationController
  def index
    # ---2) Line 13's purpose is to show all the BlogPosts aka all the data inside the database. Index is a control action within a restful route that is associated with the http verb "get" and it shows all data. The @ symbol is establishing an instance variable called "post" and is assigned to "BlogPost.all". .all is an Active Record method that will show all the blog posts.
    @posts = BlogPost.all
  end

  # ---3) Line 17's purpose is to show just only 1 specific blog post. "Show" is a control action within a restful route that is associated with the http verb "get". "Show" displays only one piece of data. .find is an Active Record method that takes in a parameter and allows us to access specific posts using their primary key.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Line 22's purpose is to allow users to create a new blog post, or add new info to the database by showing a form for them to fill out. "New" is a control action.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Line 28's purpose is to allow the user to actually create and post a new blog post. Create is a restfull route that is associated with the http verb post. By using params it only allows the user to make a post within those specific parameters. Then we have conditionals that say if the user's post fits the parameters, then the user will be redirected to where the post is created. If their post does not fit the parameters, then the user will be redirected back to the create a new blog post form.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) Edit will show the form for the user to edit the blog post. The params and primary key is what allows us to edit a specific blog post using .find. It uses the http verb get.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Here we are modifying a specific blog post using their primary key. The params are there to give the user a specific set of params that they miust adhere to in order for their update to go through. The conditionals will either redirect the user to their updated blog if they have met the params, or it will redirect them back to the edit form if their modifications do not meet those param guidelines. Update is an action control and is associated with the http verbs put and patch.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) Here we are deleting a specific blog post based on it's primary key. The condiionals are saying that if the post is successfully deleted, the the user will be redirected back to the page with all the blog posts. If the post is not successfully deleted, the user will be redirected back to that specific blog post. Destroy is an action control associated with the http verb delete.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private always goes here at the bottom of the file so that is cannot be accessed anywhere else and is used to restrict the scope of the method.
  private
  def blog_post_params
    # ---10) The strong params are being used here to restrict the user in what they have to have when making their blog post and what types of info they are allowed to give.
    params.require(:blog_post).permit(:title, :content)
  end
end
