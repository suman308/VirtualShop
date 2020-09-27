import React from 'react';
import ReactDOM from 'react-dom';
import Root  from './components/root'
import configureStore from './store/store'
import {getProducts,searchProducts} from './actions/product_actions'
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
    window.searchProducts = searchProducts
    window.getProducts = getProducts
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});


