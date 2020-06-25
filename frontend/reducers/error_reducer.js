import {combineReducers} from 'Redux'; 
import sessionErrorReducer from './session_errors'

const  errorReducer =combineReducers({
   errors: sessionErrorReducer, 
})

export default errorReducer