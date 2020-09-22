import React from 'react'; 

class Order extends React.Component {
constructor(props){
    super()
}
render() {
    const product = this.props.product
    const quantity = this.props.quantity
    const price = product.price * quantity
    
    const image = <img className="image-order" src={product.imageUrls[1]} />
    return (
        
        <div className="outer-box-order"> 
            <div>
                {image}
            </div>
            <div className="order-quantity">
                <h4>The total quantity {quantity}</h4>
                <h4>The total price {price}</h4>
            </div>

           
        </div>
    )
}
}
export default Order