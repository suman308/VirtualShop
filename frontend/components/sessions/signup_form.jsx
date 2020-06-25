import React from 'react'; 


class SignupForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
    }
updateChange(type){
    return e=> this.setState({[type]: e.target.value})
}
handleSubmit(e){
    e.preventDefault(); 
    this.props.signup(this.state)
}


render(){
    const {formType} = this.props
    return ( 
        <div> 
            <p className="SUForm-title"> Sign Up Form </p>
             <form className="SUForm" onSubmit={this.handleSubmit}>

                 <label className= "SUForm-LUn">Username: 
                     <input type="text" value={this.state.username} onChange={this.updateChange('username')} />
                 </label> 

                 <label className="SUForm-LP">Password: 
                     <input type="password" value={this.state.password} onChange={this.updateChange('password')}/>
                 </label> 

                 <label className="SUForm-E">email: 
                     <input type="email" value={this.state.email} onChange={this.updateChange('email')}/>
                 </label> 
                    
                    <button className="SUForm-BUT"> {formType} </button>
                
             
             </form>
        </div>
    )
}
}
export default SignupForm