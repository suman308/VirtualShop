class Product < ApplicationRecord

    
    validates :name, presence:true 
    validates :details, presence:true 
    validates :price, presence:true 
    validates :category, presence:true, inclusion:{in:['Art', 'Electronics', 'Books', 'Food', 'Cloths', 'Shoes','Beverage','Jewelry','Others' ]}
     
    
    belongs_to :cart, foreign_key: :cart_id, class_name: :Cart
    belongs_to :order_list, foreign_key: :order_list_id, class_name: :OrderList
    belongs_to :store, foreign_key: :store_id, class_name: :Store
    has_one_attached :image 

end
