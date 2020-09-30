import React from 'react';
import Order from './order.jsx';
import {paypalIcon, visaIcon, discoverIcon, amexIcon, mastercardIcon} from '../../../app/assets/images/icons'
class OrderList extends React.Component {
    constructor(props){
        super()
        this.state  = {
            product1 : {}

        }
       
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
        const productIds = orderlists.map(order=> order.product_id)
        const orderProducts = orderlists.map((order, ind)=> {
            var ind = {}
            ind["productId"] = order.product_id
            ind["quantity"] = order.quantity
            ind["checked_out"] = order.checked_out
            ind["Id"] = order.id
            ind["product"] = " "
            return ind
        });

    
        const prods = orderProducts.filter(pro=> productIds.includes(pro.productId.toString()))
        const finalObj = function(products, prods) {
            let result = prods.map(order =>  {
                 let Id = order.productId;
                  let product = products.find(product=> product.id == Id);
                  order.product = product; 
                  return order
                  })
            return result 
        }
    
            
            const lists = (finalObj(products, prods)).map((obj, idx) => <Order 
            product={obj.product} 
            quantity={obj.quantity} 
            checkedOut={obj.checked_out} key={idx}/>)
            const message = <h1 className="No-item"> You do not  have items in the cart right now </h1>
            const output  = (products.length) ? lists : message
        return (
              <div className="main-cart-page" >
                  <div className="under-main-cart">
                    <h1 className="items-in-cart"></h1>
                        <div className="cart"> 
                        <br/>
                            {output}  
                             
                        </div>
                 </div>
                <div className="checkout-container">
                    <div className="paying-method">
                        <div className="icon-holder">{paypalIcon}<input type="radio" /></div>
                        <div className="icon-holder">{discoverIcon}<input type="radio" /></div>
                        <div className="icon-holder">{amexIcon}<input type="radio" /></div>
                        <div className="icon-holder">{visaIcon}<input type="radio" /></div>
                        <div className="icon-holder">{mastercardIcon}<input type="radio" /></div>

                    </div>


                    <div className="check-out" onClick={this.handleClick}>

                    </div>
                </div>

               
            </div>
        )
        } else {
            return null;
        }
    }
}

export default OrderList; 
