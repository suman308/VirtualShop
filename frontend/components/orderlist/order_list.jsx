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
        
        const count = products.length;
        const orderlists = this.props.orderlists
        const Id = this.props.currentUser.id
        const cart = carts.find(cart => cart.user_id == Id)
        if (this.props !== [] && !!this.props){
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
            // console.log(products)
        //  const totalPrice = prices(products);
    
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
            const Prices = function(products) {
                let totalPrices = 0
                for (let i =0; i <products.length; i++) {
                    totalPrices = totalPrices + (products[i].product.price * products[i].quantity)
                }
            }
             
            const TotalPrices = Prices(prods)
            const lists = (finalObj(products, prods)).map((obj, idx) => <Order 
            product={obj.product} 
            quantity={obj.quantity} 
            checkedOut={obj.checked_out} key={idx}/>)
           
            const message = <h1 className="No-item"> You do not  have items in the cart right now </h1>
            const output  = (products.length) ? lists : message
        return (
              <div className="main-cart-page" >
                  <div className="just-under-main-cart">
                  <div className="under-main-cart">
                    <h1 className="items-in-cart">You have {count} item(s) in the cart</h1>
                        <div className="cart-outer"> 
                            <div className="cart">
                            {output} 
                        </div>  
                             
                        
                       
                        </div>
                 
                    
                 </div>
                
                <form className="checkout-container">
                    <h1 className="how-pay"> How You'll Pay</h1>
                    <div className="paying-method">
                        <div className="icon-holder-container">
                        <div className="icon-holder">
                            <input type="radio" name="one"   />
                            <br />
                            {paypalIcon}</div>
                        <div className="icon-holder"><input type="radio" name="one" className="radio-button" />
                            <br />
                            {discoverIcon}</div>
                        <div className="icon-holder"><input type="radio" name="one" className="radio-button" />
                            <br />{amexIcon}</div>
                        <div className="icon-holder"><input type="radio" name="one" className="radio-button" />
                            <br />{visaIcon}</div>
                        {/* <div className="icon-holder"><input type="radio" value="one" className="radio-button" />
                            <br />
                            {mastercardIcon}</div> */}
                        </div>
                    </div>

                     <h1 className="total-price"> Item(s) Total  {TotalPrices}  </h1>
                     <div className="line"></div>
                    <div className="check-out" onClick={this.handleClick}>
                          Check-Out
                    </div>
                </form>
                </div>
            </div>
        )
        } else {
            return null;
        }
    }
}

export default OrderList; 
