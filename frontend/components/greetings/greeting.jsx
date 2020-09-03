import React from  'react'; 

import {searchIcon} from '../../../app/assets/images/icons'
import { Link} from 'react-router-dom';

class Greeting extends React.Component {
   constructor(props){
       super(props)
   }

    render(){
          const {currentUser, logout, openModal} = this.props
            const navigation = ()=> (
                <nav className="login-signup">
                   
                    <Link to='/' className="Virtual-logo">
                     
                    </Link>
                    
                    <form className= "search" >
                        <div className="head-search"></div>
                        <input type="text" className="search-bar" placeholder ="Search for the items" /> 
                        <div  className="submit-button"> 
                                    {searchIcon}
                        </div>
                     
                    </form >

                    <div  className="ls-inline-container">
                        <br className="offset" />
                        <div className="ls-inline" onClick={() => openModal('login')} > Sign in</div>
                    </div>
                
                </nav>
            );

            const personalGreeting = ()=> (
                <div>
                <div className="login-signup">
                    <div className="Virtual-logo" ></div> 
                    
                      <h2 className="greeting"> Welcome home  {currentUser.username}</h2>
                        <div className="ls-inline-container" >
                            <br className="offset" />
                                <div className="ls-inline" onClick={logout}> Logout</div>
                           
                      </div>
                      
                </div>
                   
                </div>
            )
            return (
                currentUser ? personalGreeting() : navigation()
            )
       
    }
}
export default Greeting;