import React from 'react'

import {Route, Switch, Link} from 'react-router-dom';
import Modal from './modals/modal'
import GreetingContainer from './greetings/greeting_container'
import ProductIndexContainer from '../components/products/product_Index_container'
const App =()=> {
return (
    <div className= 'background-image'> 
          <header> 
            <Modal/>
            <GreetingContainer className="greeting"/>
          </header>
          

    {/* <Switch>
      <Route exact path="/products/:productId" component={ProductShowContainer} />
      <Route exact path="/cart/:cardId" component={CartShowContainer} />
      <Route exact path="/index" component={ProductIndexContainer} /> 
    </Switch> */}




    </div>
)
}
export default App 