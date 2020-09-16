import {combineReducers} from 'redux'
import productReducer from './product_reducers/product_reducer' 
import orderlistReducer from './order_list_reducer.js'
 

const entitiesReducer = combineReducers({
    products: productReducer, 
    orderlists: orderlistReducer
})

export default entitiesReducer;