import {connect} from 'react-redux'; 
import {login} from '../../actions/session'
import SigninForm from  './signin_form'

const mapst = state=> {
    return {
        user:{
            username:"", 
            password:"",
        }, 
        formType:'Log In '
    }
}

const mapdt = dispatch => {
    return {
        login: (user)=> dispatch(login(user))
    }
}

export default connect(mapst, mapdt)(SigninForm)