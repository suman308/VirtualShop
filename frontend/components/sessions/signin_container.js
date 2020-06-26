import {connect} from 'react-redux'; 
import {login} from '../../actions/session'
import SessionForm from  './session_form'
import {openModal, closeModal} from '../../actions/modal_actions'; 
import React from 'react'; 

const mapst = state=> {
    return {
        formType:'login',
        errors: state.errors.errors
    }
}

const mapdt = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapst, mapdt)(SessionForm)