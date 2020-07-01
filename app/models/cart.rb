# == Schema Information
#
# Table name: carts
#
#  id          :bigint           not null, primary key
#  user_id     :string           not null
#  checked_out :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  product_id  :string
#
class Cart < ApplicationRecord
    validates :user_id, presence:true 
    validates :checked_out, inclusion:{in:[false, true]}
    
    belongs_to :user, foreign_key: :user_id,  class_name: :User
    has_many :products, foreign_key: :cart_id, class_name: :Product
end
