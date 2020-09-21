
import {connect} from 'react-redux'; 
import {getProducts, getProduct} from '../../actions/product_actions';
import ProductShow from './product_show';
import {createOrderList} from '../../actions/OrderList'
import {getCart, createOrderList} from '../../actions/cart_action'


const mpst = (state, ownProps) => {
 
  const carts = Array.from(state.entities.carts)
  const currentUser = state.session.currentUser
  const products = (state.entities.products)
  const product = products[ownProps.match.params.id]
  const cart = currentUser ? carts.find(cart=> cart.id = currentUser.id) : null
  
  return { 
    products: Array.from(state.entities.products),
    product: product,
      currentUser: state.session.currentUser,
      cart: cart
  }
}

const mapdt = dispatch => {
    return {
      createOrderList: (orderlist)=> dispatch(createOrderList(orderlist)),
      getProducts: ()=> dispatch(getProducts()),
      getProduct: (id) => dispatch(getProduct(id)),
      getCart: (id)=> dispatch(getCart(id)),
      createOrderList : (orderList)=> dispatch(createOrderList(orderList))
    }
}
   

export default connect(mpst, mapdt)(ProductShow)
