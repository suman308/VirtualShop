
import {connect} from 'react-redux'; 
import {getProducts, getProduct} from '../../actions/product_actions';
import ProductShow from './product_show';
import { createOrderList} from '../../actions/OrderList'
import { getCarts} from '../../actions/cart_action'

const mpst = (state, ownProps) => {
 
  const carts = state.entities.carts
  const currentUser = state.session.currentUser
  const products = (state.entities.products)
  const product = products[ownProps.match.params.id]
 
  
  return { 
     
      product: product,
      currentUser: currentUser,
      carts: carts
  }
}

const mapdt = dispatch => {
    return {
      getCarts : ()=> dispatch(getCarts()),
      getProducts: ()=> dispatch(getProducts()),
      getProduct: (id) => dispatch(getProduct(id)),
      addToCart : (orderList)=> dispatch(createOrderList(orderList))
    }
}
   

export default connect(mpst, mapdt)(ProductShow)
