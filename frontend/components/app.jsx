import React from 'react'
import ProductIndexContainer from './products/product_Index_container'
import {Route, Switch} from 'react-router-dom';
import Modal from './modals/modal'
import GreetingContainer from './greetings/greeting_container'
 import ProductShowContainer from './products/product_show_container'
const App =()=> {
return (
  
     <div id= 'app'> 
          <header> 
              <Modal/>
              <GreetingContainer className="greeting"/> 
           </header> 
              
             <Switch>
               <Route  path='/' exact component={ProductIndexContainer}/>
              
               <Route path='/product/show/:Id' exact component={ProductShowContainer}/>
                
             </Switch>
    </div>  
      


)
}
export default App 


