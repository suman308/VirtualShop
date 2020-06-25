import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, REMOVE_ERRORS} from '../actions/session'

const sessionErrorReducer = (state={}, action) => {
     Object.freeze(state)
   switch(action.type){
       case RECEIVE_SESSION_ERRORS:
           return  Object.assign({}, action.errors)
       case REMOVE_ERRORS:
           return {} 
       case RECEIVE_CURRENT_USER: 
            return {} 
        default: 
           return state

   }
}
  

export default sessionErrorReducer;