json.partial! "api/products/product", product:product
json.imageUrls product.images.map { |file| url_for(file) }