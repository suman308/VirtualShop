import React from 'react'
import {Route, Switch, Link} from 'react-router-dom';
import SignUpFormContainer from '../components/session/signup_container'
import SignInFormContainer from '../components/session/signin_container'
const App =()=> {
return (
    <div> 
       <header> 
          <p>welcome to the e-commerce site </p>
        
       </header>
        <Switch>
          <Route exact path='/login'  component={SignUpFormContainer}/>
          <Route exact path='/signin'  component={SignInFormContainer}/>
        </Switch>
    </div>
)
}
export default App 