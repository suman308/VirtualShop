import {RECEIVE_ALL_PRODUCTS,RECEIVE_PRODUCT,UPDATE_PRODUCT,REMOVE_PRODUCT}  from '../../actions/product_actions';


const productReducer = (state={}, action)=> {
       const nextState = Object.assign({},state)
       switch(action.type){
           case RECEIVE_ALL_PRODUCTS: 
              return action.products 
           case RECEIVE_PRODUCT: 
              nextState[action.product.id] = action.product 
              return nextState; 
           case REMOVE_PRODUCT:
              delete nextState[action.productId]
              return nextState;
            default: 
             return state 
       }

}
export default productReducer;