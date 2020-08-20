import {connect} from 'react-redux'; 
import Product from './product_show';
import ProductShow from './product_show'

const mpst = state=> {
  return { 
     product : state.entities.product[ownProps.match.params.productId]
  }
}

const mapdt = dispatch => {
    return {
      getProduct:(productId)=> dispatch(getProduct(productId))
    }
}
   

export default connect(mpst, mapdt)(ProductShow)
