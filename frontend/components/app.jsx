import React from 'react'
import {Route, Switch, Link} from 'react-router-dom';
import Modal from './modals/modal'
import GreetingContainer from './greetings/greeting_container'
const App =()=> {
return (
    <div> 
       <header> 
         <Modal/>
         <GreetingContainer className="greeting"/>
       </header>
       
    </div>
)
}
export default App 