import React from  'react'; 
import ProductIndexContainer from '../../components/products/product_Index_container'


class Greeting extends React.Component {
   constructor(props){
       super(props)
   }

    render(){
          const {currentUser, logout, openModal} = this.props
            const navigation = ()=> (
                <nav className="login-signup">
                    <div className="Virtual-logo"></div>
                    <form className= "search" >
                        <div className="head-search"></div>
                        <input type="text" className="search-bar" placeholder ="Search for the items" /> 
                        <input type="submit" className="submit-button"> 
                        </input>
                     
                    </form >

                    <div  className="ls-inline-container">
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
                            <div className="ls-inline" onClick={logout}> Logout</div>
                      </div>
                      
                </div>
                    <ProductIndexContainer />
                </div>
            )
            return (
                currentUser ? personalGreeting() : navigation()
            )
       
    }
}
export default Greeting;