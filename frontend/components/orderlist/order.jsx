import React from 'react'; 

class Order extends React.Component {
constructor(props){
    super()
}
render() {
    const product = this.props.product
    const quantity = this.props.quantity
    const price = product.price * quantity
    const image = <img className="image-holder-box" src={product.imageUrls[1]} />
    return (
        <div> 
            <div>
                {image}
            </div>
            <div>
                <h4>The total price {price}</h4>
            </div>

            <form action="">
            
             
            </form>
        </div>
    )
}
}
export default Order