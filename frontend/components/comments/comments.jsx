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
    if (comments) {
        comments.map
    }
}
}

export default Comment