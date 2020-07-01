json.extract! product, :id, :name, :details, :price, :image, :category, :store_id, :rating
json.imageUrl  url_for(product.image)
