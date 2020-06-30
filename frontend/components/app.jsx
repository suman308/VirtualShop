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
         <ProductIndexContainer className='Product-container'/>
       </header>
       
    </div>
)
}
export default App 