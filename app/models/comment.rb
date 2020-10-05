class Comment < ApplicationRecord
    validates :user_id, presence:true
    validates :product_id, presence:true 
    validates :body, presence:true

    belongs_to :user, foreign_key: :user_id, class_name: :Comment
    belongs_to :Product, foreign_key: :product_id, class_name: :Comment
end 