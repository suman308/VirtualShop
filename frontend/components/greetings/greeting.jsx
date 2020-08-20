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
                    <div class="Virtual-logo"></div>
                    <div class= "search-bar"> </div>
                    <div className="ls-inline">
                        <button onClick={() => openModal('login')} className="ls-button"> Login</button>
                    </div>
                    

                </nav>
            );

            const personalGreeting = ()=> (
                <div>
                <div className="login-signup">
                     <div class="homepage-logo"> </div>
                      <h2 className="greeting"> Welcome home  {currentUser.username}</h2>
                      <span>
                        <button className="ls-button" onClick={logout}> Logout</button>
                      </span>
                      
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