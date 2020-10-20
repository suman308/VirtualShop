def index 
    @ratings = Rating.where("product_id = ?")
end 

