import React from 'react' 

class SignInForm extends React.Component {
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
        this.props.login(this.state)
    }
    render(){
        return (
            <div> 
                <form onSubmit={this.handleSubmit} className="SIForm">
                 <label className="SIForm-label">username or email
                        <input type="text" value={this.state.username} onChange={this.updateChange('username')}/>
                 </label>

                    <label className="SIForm-label">password 
                        <input type="password" value={this.state.password}  onChange={this.updateChange('password')}/>
                 </label>
                <button className="SIForm-button">{this.props.formType} </button>
                </form>

            </div>
        )
    }
}

export default SignInForm

