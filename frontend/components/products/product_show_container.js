import {connect} from 'react-redux'; 
import ProductShow from './product_show'
import {getProducts} from '../../actions/product_actions'

const mpst = (state, ownProps)=> {
  return { 
     product : state.entities.products.filter( product=> product.id== ownProps.match.params.id)
  }
}

const mapdt = dispatch => {
    return {

      getProducts: ()=> dispatch(getProducts())
    }
}
   

export default connect(mpst, mapdt)(ProductShow)
