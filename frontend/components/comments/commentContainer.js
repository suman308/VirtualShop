import {connect} from 'react-redux'; 
import {getComment, getComments, createComment} from '../../actions/comment_action'; 
import {getUsers} from '../../actions/user_action'
import Comment from './comments'
const mpst = (state, ownProps) => {
    const comments = state.entities.comments 
   
    return {
        comments : this.state.entities.comments,
        users: this.state.entities.users
    }
    
}

const mapdt = dispatch => {
    return {
        getComment : (Id)=> dispatch(getComment(Id)), 
        getComments: ()=> dispatch(getComments()), 
        createComment: (comment)=> dispatch(createComment(comment)),
        getUsers : ()=> dispatch(getUsers())
    }
}

export default connect(mpst, mapdt)(Comment)