
import {connect} from 'react-redux'; 
import {getProducts, getProduct} from '../../actions/product_actions';
import ProductShow from './product_show';
import {createOrderList} from '../../actions/OrderList'
import {getCart} from '../../actions/cart_action'


const mpst = (state, ownProps) => {
  const pros = Array.from(state.entities.products);
  const pro = pros.find(pro => pro.id == ownProps.match.params.id)
  const carts = Array.from(state.entities.carts)
  const currentUser = state.session.currentUser
  
  const cart = currentUser ? carts.find(cart=> cart.id = currentUser.id) : null
   
  return { 
     product: pro,
    products: Array.from(state.entities.products).find(pro => pro.id == ownProps.match.params.id),
      currentUser: state.session.currentUser,
      cart: cart
  }
}

const mapdt = dispatch => {
    return {
      createOrderList: (orderlist)=> dispatch(createOrderList(orderlist)),
      getProducts: ()=> dispatch(getProducts()),
      getProduct: (id) => dispatch(getProduct(id)),
      getCart: (id)=> dispatch(getCart(id))
    }
}
   

export default connect(mpst, mapdt)(ProductShow)
