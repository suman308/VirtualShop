# == Schema Information
#
# Table name: products
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  details       :text             not null
#  price         :float            not null
#  category      :string           not null
#  ratings       :float
#  store_id      :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  cart_id       :string
#  order_list_id :string
#
class Product < ApplicationRecord

    
    validates :name, presence:true 
    validates :details, presence:true 
    validates :price, presence:true 
    validates :category, presence:true, inclusion:{in:['Art', 'Electronics', 'Books', 'Food', 'Cloths', 'Shoes','Beverage','Jewelry','Others' ]}
     
    
    belongs_to :cart, 
    foreign_key: :cart_id, 
    class_name: :Cart, 
    optional: :true
    
    belongs_to :order_list, foreign_key: :order_list_id, class_name: :OrderList, optional: :true
    belongs_to :store, foreign_key: :store_id, class_name: :Store
    has_one_attached :image 

end
