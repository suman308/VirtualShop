import React from 'react'; 

class Order extends React.Component {
constructor(props){
    super()
}
render() {
    const product = this.props.product
    const quantity = this.props.quantity
    const price = (product.price * quantity).toFixed(2)
    const name = product.name 
    const image = <img className="image-order" src={product.imageUrls[1]} />
    return (
        
        <div className="outer-box-order"> 
            <div className="order-image-holder">
                <div className="text-name"> {name}</div>
                {image}
            </div>
            <div className="order-quantity">
                <h4 className="text-quantity" > Quantity = {quantity}</h4>
                <h4 className="text-price" > Amount = ${price}</h4>
            </div>

           
        </div>
    )
}
}
export default Order