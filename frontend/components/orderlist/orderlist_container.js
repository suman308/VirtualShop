import { getOrderLists, createOrderList, updateOrderList} from '../../actions/OrderList'
import { getProducts} from "../../actions/product_actions"
import {connect} from 'react-redux'; 
import OrderList from './order_list'

const mapst = state => {
    const orderlists = Object.values(state.entities.orderlists)
    
    return {
        orderlists: orderlists, 
        products: (cart_Id) => orderlists.filter(orderlist => orderlist.cart_Id == cart_Id),
        currentUser: state.session.currentUser

    }
}

const mapdt = dispatch => {
    return {
        getOrderLists : ()=> dispatch(getOrderLists()),
        getProducts : ()=> dispatch(getProducts()), 
        createOrderList: (orderlist)=> dispatch(createOrderList(orderlist)),
        updateOrderList: (orderlist)=> dispatch(updateOrderList(orderlist))

    }
}

export default connect(mapst, mapdt)(OrderList)