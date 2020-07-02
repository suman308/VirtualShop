json.extract! product, :id, :name, :details, :price, :category, :store_id
json.imageUrl  url_for(product.image)
