import React from  'react'; 

class Greeting extends React.Component {
   constructor(props){
       super(props)
   }

    render(){
          const {currentUser, logout, openModal} = this.props
            const navigation = ()=> (
                <nav className="login-signup">
                    <button onClick={()=> openModal('login')} className="ls-button"> Login</button>
                    <br/>
                    <button onClick={()=> openModal('signup')} className="ls-button"> Signup</button>

                </nav>
            );

            const personalGreeting = ()=> (
                <div className="login-signup">
                      <h2 className="greeting"> Hi {currentUser.username}</h2>
                      <button className="ls-button" onClick={logout}> Logout</button>
                </div>
            )
            return (
                currentUser ? personalGreeting() : navigation()
            )
       
    }
}
export default Greeting;