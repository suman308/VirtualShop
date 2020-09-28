
import {searchProducts, clearProducts} from '../../actions/product_actions';
import {withRouter} from 'react-router-dom'
import Search from './search'; 

const mapst = state => {
    return {
        products: state.entities.products
    }
}

const mapdt = dispatch => {
    return {
        searchProducts: (query)=> dispatch(searchProducts(query)), 
        clearProducts: ()=> dispatch(clearProducts())
    }
}
export default withRouter(mapst, mapdt)(Search)