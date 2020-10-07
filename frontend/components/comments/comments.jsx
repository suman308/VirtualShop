import React from 'react'; 
import CommentIndex from './comment'

class Comment extends React.Component {
    constructor(props){
    super(props)
    
   
    }

componentDidMount(){
    const productId = this.props.productId 
    this.props.getComments(productId)
    this.props.getUsers(); 

}


render() {
    if(this.props){
    const comments = this.props.comments 
    const users = this.props.users
    
    let da = comments.map(comment=> {
        let data = new Object(); 
        data.body = comment.body; 
        let user = users.filter(user => user.id == comment.user_id)
        data.name = user.username;
        return data 
    })
    

    const display = da.map(d => <CommentIndex name = {d.name} body={d.body}  />)

    return  (
        <div>
            {display}
        
        </div>
        
    )
} else {
    return null;
}
}
}

export default Comment