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
        const orderlists = this.props.orderlists
        const Id = this.props.currentUser.id
        const cart = carts.find(cart => cart.user_id == Id)
        if (cart ){

        console.log(orderlists)
        const productIds = orderlists.map(order=> order.product_id)
        const orderProducts = orderlists.map((order, ind)=> {
            var ind = {}
            ind["productId"] = order.product_id
            ind["quantity"] = order.quantity
            ind["checked_out"] = order.checked_out
            return ind
        });

            console.log(productIds)
        const prods = orderProducts.filter(pro=> productIds.includes(pro.productId.toString()))
        const prods = 
        const lists = prods.map((product, idx) => <Order product={product.} quantity= {product.quantity} key={idx}/>)
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
