import React from 'react'
import ProductIndexContainer from './products/product_Index_container'
import {Route, Switch} from 'react-router-dom';
import Modal from './modals/modal'
import GreetingContainer from './greetings/greeting_container'
// import ProductShowContainer from './products/product_show_container'
const App =()=> {
return (
  
     <div id= 'app'> 
          <header> 
              <Modal/>
              <GreetingContainer className="greeting"/> 

           </header> 
            <div className="title">
                 <h3> The best online shop for buying and selling things </h3>
            </div>
             <Switch>
               <Route  path='/' exact component={ProductIndexContainer}> </Route>
              
               {/* <Route path='/product/show/:Id' exact component={ProductShowContainer}> </Route>
                */}
             </Switch>
    </div>  
      


)
}
export default App 


