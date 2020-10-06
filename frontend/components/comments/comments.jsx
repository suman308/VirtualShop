import React from 'react'; 
import CommentIndex from './comment'

class Comment extends React.Component {
    constructor(props){
    super(props)
    this.state = { user_id: "", product_id: "", user_id: "" }

    }

componentDidMount(){
    this.props.getComments()
    this.props.getUsers(); 

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
    

    // let display = da.map(d => { <div>
    //      <h1 className="commentor"> {d.name} ::</h1>
    //     <h1 className="comment-body"> {d.body}</h1> 
    //     <input className="comment-section" placeholder="comments.." />
    //     </div>}
    //     )
    let display = 
    
    return  (
        {display}
    )
} else {
    return null;
}
}
}

export default Comment