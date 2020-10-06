import React from 'react'

class CommentIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const name = this.props.name 
        const comment = this.props.body
        return (
            <div>
                <div className="comment-name">
                    <h1 className="name"> {name}:</h1>
                    <h1 className="comment"> {comment}</h1>
                </div>
            </div>
        )
    }
}
export default CommentIndex;