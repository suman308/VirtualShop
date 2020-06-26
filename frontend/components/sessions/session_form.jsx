import React from 'react'; 
import {withRouter} from 'react-router-dom'; 


class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            username:'',
            password:'', 
            email:''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(type){
        return e=>this.setState({
            [type]: e.target.value 
        })
    }
    
    handleSubmit(e){
    
       e.preventDefault()
        const user = Object.assign({}, this.state)
        this.props.processForm(user).then(this.props.closeModal)
    
      
    }

    displayErrors(){
        const errors = this.props.errors 
        if (errors=== undefined) {
            return null;
        } else {
            return (
                <ul>
                    {errors.map((error, i) => (
                        <li key={i}> {error}</li>
                    ))}
                </ul>
            )

        }
        
    }

    render(){
        const emailInput = (<input type="text" placeholder='Email' onChange={this.update('email')} className="login-input" />)

            const display = (this.props.formType === 'signup') ? emailInput : ""
            const name = (this.props.formType === 'signup' ? "SIGN UP FORM" : "SIGN IN FORM")
            const actionType = (this.props.formType === 'signup' ? "REGISTER" : "LOGIN")
            const titleText  = <h2>{name}</h2>
        return (
            
    <div className="form-outermost"> 
                <div  className="form-header">
                        <div> </div>
                    <div className="form-cancel" onClick={this.props.closeModal}>
                        
                        <div  className="close"> X </div>
                    </div>
                </div>
                 
                <div className="container">
                    <div className="title"> {titleText}</div>
                </div>

                <div className="container">
                        <div className="error-text" >{this.displayErrors()}</div>
                </div>  
                

                <div className="container">
                   <form onSubmit={this.handleSubmit} className="session-form">
                         
                

                             <div className='Input-container'>

                                     <input type="text" placeholder='Username' onChange={this.update('username')} className="login-input" />
                             </div>


                             <div className='Input-container'>

                                     <input type="text" placeholder="Password" onChange={this.update('password')} className="login-input" />

                             </div>


                             <div className='Input-container'>
                            
                                 {display}

                             </div>
                           

                            <div className='Input-container'>

                                <input className="session-submit" type="submit" value={actionType} />

                             </div>
                                
  
                     </form>

               </div>

            </div>
        )
    }

}

export default withRouter(SessionForm)