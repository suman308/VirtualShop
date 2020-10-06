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
                <h1> {name}</h1>
                <h1> {comment}</h1>
            </div>
        )
    }
}
export default CommentIndex;