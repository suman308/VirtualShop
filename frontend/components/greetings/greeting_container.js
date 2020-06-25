 import {connect} from 'react-redux'; 
 import {logout} from '../../actions/session';
 import greeting from './greeting';

 const mapst = state => {
    return {
        currentUser: state.currentUser
    }
 }
  const mapdt = dispatch => {
    return {
        logout:()=> dispatch(logout())
    }
}

export default connect(mapst, mapdt)(greeting)