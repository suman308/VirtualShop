import React from 'react';
import Order from './order.jsx';

class OrderList extends React.Component {
    constructor(props){
        super()

    }
    componentDidMount(){
        this.props.getProducts(); 
        this.props.getOrderLists();
        this.props.getCarts();
       
    }
    render(){
        const carts = this.props.carts
        const products = this.props.products
        const Id = this.props.currentUser.id
        const cart = carts.find(cart => cart.user_id == Id)
        if (cart ){

        const cart_Id = cart.id 
        const orderlists = this.props.orderlists
        const pam = Object.assign({})
        const productIds = orderlists.map(order=> {
            pam.productId = order.product_id; 
            pam.Q = order.quantity
            return pam})
            console.log(pam)
        const prods = products.filter(pro=> productIds.includes(pro.id.toString()))
        const lists = prods.map(product => <Order product={product} quantity= {product.quantity} key={product.id}/>)
        const message = <h1 className="No-item"> You do not  have items in the cart right now </h1>
        const output  = (products.length) ? lists : message
       
        return (

            <div> 
                  {output}  
                    
            </div>
        )
        } else {
            return null;
        }
    }
}

export default OrderList; 
