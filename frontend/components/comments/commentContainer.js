import {connect} from 'react-redux'; 
import {getComment, getComments, createComment} from '../../actions/comment_action'; 
import {getProducts} from '../../actions/product_actions'
import Comment from './comments'
const mpst = (state, ownProps) => {
    const comments = state.entities.comments 

    return {
        comments : comments
    }
    
}

const mapdt = dispatch => {
    return {
        getComment : (Id)=> dispatch(getComment(Id)), 
        getComments: ()=> dispatch(getComments()), 
        createComment: (comment)=> dispatch(createComment(comment)),
        getProducts : ()=> dispatch(getProducts())
    }
}

export default connect(mpst, mapdt)(Comment)