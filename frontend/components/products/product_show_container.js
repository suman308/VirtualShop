import {connect} from 'react-redux'; 
import ProductShow from './product_show'
import {getProducts} from '../../actions/product_actions'
const mpst = state=> {
  return { 
     product : state.entities.product[ownProps.match.params.productId]
  }
}

const mapdt = dispatch => {
    return {
      getProducts: ()=> dispatch(getProducts())
    }
}
   

export default connect(mpst, mapdt)(ProductShow)
