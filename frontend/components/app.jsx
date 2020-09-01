import React from 'react'
import ProductIndexContainer from './products/product_Index_container'
import {Route, Switch} from 'react-router-dom';
import Modal from './modals/modal'
import GreetingContainer from './greetings/greeting_container'
 import ProductShowContainer from './products/product_show_container'
 import PageNotFound from './pageNotFound'
 import NavBar from './navbar/navbar'
const App =()=> {
return (
  
     <div id= 'app'> 
          <header> 
              <Modal/>
              <GreetingContainer className="greeting"/> 
              <NavBar/>
           </header> 
              
             <Switch>
               <Route path='/' exact component={ProductIndexContainer}/>
               <Route path='/product/show/:id' exact component={ProductShowContainer}/>
               <Route path="*"  component={PageNotFound}/>
             </Switch>
    </div>  
      


)
}
export default App 


