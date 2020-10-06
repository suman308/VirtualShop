import React from 'react'; 
import CommentIndex from './comment'

class Comment extends React.Component {
    constructor(props){
    super(props)
    this.state = { body: "", product_id: "", user_id: "" }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    }

componentDidMount(){
    const productId = this.props.match.params.id
    this.props.getComments(productId)
    this.props.getUsers(); 

}
handleChange(e) {
    const user_id = this.props.curreUser
    const product_id = this.props.product.id
    const body  = e.currentTarget.value
 this.setState({ 
     user_id: user_id,
     product_id: product_id, 
     body: body 
     })
}
handleSubmit(e){
e.preventDefault();
this.props.createComment(this.state)
}
render() {
    if(this.props){
    const comments = this.props.comments 
    const users = this.props.users
    
    let da = comments.map(comment=> {
        let data = new Object(); 
        data.body = comment.body; 
        let user = users.filter(user.id == comment.user_id)
        data.name = user.name;
        return data 
    })
    

    const display = da.map(d => <CommentIndex name = {d.name} body={d.body}  />)
    
    return  (
        <div>
            {display}
        <form className="form" onSubmit={this.handleSubmit}>
            
                <input type="text" onChange={this.handleChange} className="input-comment" placeholder= "Write  comment...."/>
            
          <button type="submit" className="submit"> Add comment</button>
            </form>
        </div>
        
    )
} else {
    return null;
}
}
}

export default Comment