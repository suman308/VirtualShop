import React from  'react'; 

class Greeting extends React.Component {
   constructor(props){
       super(props)
   }

    render(){
          const {currentUser, logout, openModal} = this.props
            const navigation = ()=> (
                <nav className="login-signup">
                    <span></span>
                    <div className="ls-inline">
                        <button onClick={() => openModal('login')} className="ls-button"> Login</button>
                        <br />
                        <button onClick={() => openModal('signup')} className="ls-button"> Signup</button>
                    </div>
                    

                </nav>
            );

            const personalGreeting = ()=> (
                <div className="login-signup">
                      <h2 className="greeting"> Welcome home  {currentUser.username}</h2>
                      <span>
                        <button className="ls-button" onClick={logout}> Logout</button>
                      </span>
                      
                </div>
            )
            return (
                currentUser ? personalGreeting() : navigation()
            )
       
    }
}
export default Greeting;