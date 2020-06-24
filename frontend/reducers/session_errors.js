import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, REMOVE_ERRORS} from '../actions/session'

const sessionErrorReducer = (state={}, action) => {
     Object.freeze(state)
   const  nextState = Object.assign({}, state)
   switch(action.type){
       case RECEIVE_SESSION_ERRORS:
            nextState[errors] = action.errors 
            return nextState
       case REMOVE_ERRORS:
           return {} 
       case RECEIVE_CURRENT_USER: 
            return {} 

   }
}
  

export default sessionErrorReducer;