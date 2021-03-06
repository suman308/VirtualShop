
import {connect} from 'react-redux'; 
import {getProducts, getProduct} from '../../actions/product_actions';
import ProductShow from './product_show';
import { createOrderList} from '../../actions/OrderList'
import { getCarts} from '../../actions/cart_action'
import {getComments} from '../../actions/comment_action'
import {getUsers} from '../../actions/user_action'
import {createComment} from '../../actions/comment_action'
import { openModal } from '../../actions/modal_actions'
const mpst = (state, ownProps) => {
 
  const carts = state.entities.carts
  const currentUser = state.session.currentUser
  const products = (state.entities.products)
  const product = products[ownProps.match.params.id]
  const comments = state.entities.comments
  const users = state.entities.users
 
  
  return { 
     
      product: product,
      currentUser: currentUser,
      carts: carts, 
      comments: comments, 
      users: users
  }
}

const mapdt = dispatch => {
    return {
      getCarts : ()=> dispatch(getCarts()),
      getProducts: ()=> dispatch(getProducts()),
      getProduct: (id) => dispatch(getProduct(id)),
      addToCart : (orderList)=> dispatch(createOrderList(orderList)),
      getComments: (Id)=>dispatch(getComments(Id)), 
      getUsers: ()=> dispatch(getUsers()), 
      createComment:(comment)=> dispatch(createComment(comment)),
      openModal: modal => dispatch(openModal(modal))
    }
}
   

export default connect(mpst, mapdt)(ProductShow)
