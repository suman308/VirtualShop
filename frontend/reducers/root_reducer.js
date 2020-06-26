import {combineReducers} from 'redux'; 
import sessionReducer from './session'
import errorReducer from './error_reducer';
import uiReducer from './ui_reducer'
const rootReducer = combineReducers({
    session: sessionReducer, 
    errors: errorReducer, 
    ui : uiReducer
})

export default rootReducer;