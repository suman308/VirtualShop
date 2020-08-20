import React from 'react'
import ProductIndexContainer from './products/product_Index_container'
import {Route, Switch, Link} from 'react-router-dom';
import Modal from './modals/modal'
import GreetingContainer from './greetings/greeting_container'
const App =()=> {
return (
  
     <div id= 'app'> 
          <header> 
              <Modal/>
              <GreetingContainer className="greeting"/> 

           </header> 

            <div>
                 <ProductIndexContainer />
            </div>
             <Switch>
                <Route ></Route>
             </Switch>
    </div>  
      


)
}
export default App 


