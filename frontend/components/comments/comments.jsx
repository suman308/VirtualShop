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
    

    const display = da.map(d => <CommentIndex name = {d.name} body={d.body}  />)
    
    return  (
        <div>
            {display}
          <input type="text" className="/>
        </div>
        
    )
} else {
    return null;
}
}
}

export default Comment