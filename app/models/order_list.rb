class OrderList < ApplicationRecord
    validates :user_id, presence:true 

    belongs_to :user, foreign_key: :user_id, class_name: :User
    has_many :products, foreign_key: :order_list_id, class_name: :OrderList
end
