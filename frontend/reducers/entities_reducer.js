import {combineReducers} from 'redux'
import productReducer from './product_reducers/product_reducer' 
 

const entitiesReducer = combineReducers({
    products: productReducer
})

export default entitiesReducer;