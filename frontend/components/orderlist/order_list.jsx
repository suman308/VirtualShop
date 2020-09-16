import React from 'react';
import Order from './order.jsx';

class OrderList extends React.Component {
    constructor(props){
        super()

    }
    componentDidMount(){
        this.props.getProducts(); 
        this.props.getOrderLists();
    }
    render(){
        const currentUser = this.props.currentUser
        const products = this.props.products(currentUser.cart_Id).filter(order=> order.checked_out == false)
        const orderlists = products.map(product => <Order product={product} quantity= {product.quantity}/>)
        const message = <h1 className="No-item"> You do not  have items in the cart right now </h1>
        const output  = (products.length) ? orderlists : message
       
        return (

            <div> 
                  {output}  
                    
            </div>
        )
    }
}

export default OrderList; 
