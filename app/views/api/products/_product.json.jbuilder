json.extract! product, :id, :name, :details, :price, :category, :store_id
json.imageUrls  url_for(product.image)
