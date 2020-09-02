
import {connect} from 'react-redux'; 
import {getProducts, getProduct} from '../../actions/product_actions';
import ProductShow from './product_show';


const mpst = (state, ownProps) => {
  const pros = Array.from(state.entities.products);
  const pro = pros.find(pro => pro.id == ownProps.match.params.id)
  return { 
     product: pro
  }
}

const mapdt = dispatch => {
    return {
      getProducts: ()=> dispatch(getProducts()),
      getProduct: (id) => dispatch(getProduct(id))
    }
}
   

export default connect(mpst, mapdt)(ProductShow)
