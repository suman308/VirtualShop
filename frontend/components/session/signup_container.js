import {connect} from 'react-redux'; 
import {signup} from '../../actions/session'
import SignupForm from './signup_form'

const mapst= state=> {
    return {
        user:{
            username: "",
            email: "",
            password:""

        },
        formType:"Create Account"
    }
}

const mapdt = dispatch=> {
    return {
        signup: (user)=> dispatch(signup(user))
    }
}

export default connect(mapst, mapdt)(SignupForm)