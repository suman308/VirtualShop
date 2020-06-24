import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from '../reducers/rootReducer';


const configureStore = (preloadedSate={})=>{
    return store = createStore(RootReducer, preloadedSate, applyMiddleware(thunk,logger))
}

export default configureStore;