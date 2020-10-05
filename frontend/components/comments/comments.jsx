import React from 'react'; 


class Comment extends React.Component {
    constructor(props){
    super(props)
}
componentDidMount(){
    this.props.getComments()
}
render() {
    const comments = this.props.comments 
    let display = ""
    if (comments) {
        comments.map(comment=> <h1> {comment.body}</h1>)
    }
}
}

export default Comment