import React from  'react'; 
import { cartIcon} from '../../../app/assets/images/icons'
import { Link} from 'react-router-dom';
import Search from '../searchs/search_container'
class Greeting extends React.Component {
   constructor(props){
       super()
       this.handleClick = this.handleClick.bind(this)
   }
  
  handleClick(){
      this.props.clearProducts()
      this.props.getProducts()
  }


    render(){
          const {currentUser, logout, openModal} = this.props
            const navigation = ()=> (
                <nav className="login-signup">
                   
                        <Link to='/reload' replace className="Virtual-logo" >
                        </Link>
                    
                   
                   <Search/>

                    <div  className="ls-inline-container">
                        <br className="offset" />
                        <div className="ls-inline" onClick={() => openModal('login')} > Sign in</div>
                    </div>
                
                </nav>
            );

            const personalGreeting = ()=> (
                <div>
                <div className="login-signup">
                        
                            <Link to='/reload'  className="Virtual-logo" >
                            </Link>
                       
                            <Search />
                        
                        <br />

                      
                        <div className="ls-inline-container" >
                            <h2 className="greeting">Hello {currentUser.username}</h2>

                                <div className="ls-inlineCT" >
                                    <Link to='/cart'  > 
                                    <div className="Cart-Icon" onClick={this.handleClick}>
                                            {cartIcon}
                                        </div>
                                           
                                     </Link>
                                
                                </div>
                            <div className="divider"></div>
                            <Link to='/'>
                                    <div className="ls-inline" onClick={logout}> Logout</div>
                            </Link>
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