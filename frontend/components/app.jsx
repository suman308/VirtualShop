import React from 'react'
import {Route, Switch, Link} from 'react-router-dom';
import SignUpFormContainer from '../components/sessions/signup_container'
import SignInFormContainer from '../components/sessions/signin_container'
import GreetingContainer from './greetings/greeting_container'
const App =()=> {
return (
    <div> 
       <header> 
          
         <GreetingContainer/>
       </header>
        <Switch>
          <Route exact path='/login'  component={SignUpFormContainer}/>
          <Route exact path='/signin'  component={SignInFormContainer}/>
        </Switch>
    </div>
)
}
export default App 