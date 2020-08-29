json.extract! product, :id, :name, :details, :price, :category, :store_id
json.images  url_for(product.images)
