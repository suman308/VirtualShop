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
    this.props.getComments(productId);

}


render() {
    if(this.props.users && this.props.comments){
    const comments = this.props.comments 
    const users = this.props.users
    
    let da = comments.map(comment=> {
        let data = new Object(); 
        data.body = comment.body; 
        let user = users.filter(user => user.id == comment.user_id)
         let user1 = Array.from(user)[0]
        data.name = user1.username;
        return data 
    })
    

    const display = da.map((d, ind) => <CommentIndex  key={ind} name = {d.name} body={d.body} date={d.date}  />)

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