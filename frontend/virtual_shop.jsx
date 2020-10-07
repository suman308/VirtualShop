import React from 'react';
import ReactDOM from 'react-dom';
import Root  from './components/root'
import configureStore from './store/store'
 import {createComment} from './actions/comment_action'
document.addEventListener("DOMContentLoaded", () => {
    let store;
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

   
    window.store = store;
    window.createComment = createComment
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});


