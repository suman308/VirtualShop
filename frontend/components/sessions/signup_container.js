import {connect} from 'react-redux'; 
import {signup} from '../../actions/session'
import SessionForm from './session_form'
import React from 'react'
import {openModal, closeModal} from '../../actions/modal_actions'

const mapst= state=> {
    return {
        errors: state.errors.errors, 
        formType:'signup'
    };
}

const mapdt = dispatch => {
    return {
        processForm:(user)=> dispatch(signup(user)), 

        otherForm:(
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ), 
        closeModal:()=> dispatch(closeModal())
    }
}

export default connect(mapst, mapdt)(SessionForm)