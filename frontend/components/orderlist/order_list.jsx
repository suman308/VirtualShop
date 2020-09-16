import React from 'react';
import Order from './order.jsx';

class OrderList extends React.Component {
    constructor(props){
        super(props)

    }
    componentDidMount(){
        this.props.getProducts(); 
        this.props.getOrderLists();
    }
    render(){
        const currentUser = this.props.currentUser
        const products = this.props.products(currentUser.cart_Id).filter(order=> order.checked_out == false)
        const orderlist = products.map(product => <Order product={product} quantity= {product.quantity}/>)
        return (
            <div> 
                    {orderlist}
            </div>
        )
    }
}

export default OrderList; 
