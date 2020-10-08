import React from 'react'

class CommentIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const name = this.props.name 
        const comment = this.props.body
        const date = this.props.date
        return (
           
             
                   

                   <div className="name-date-holder"> 
                    <div className="profile-pic">
                        <img src={''} />
                    </div>
                        <div>
                            <h1 className="name"> {name}::</h1>
                            <h1 className="date"> {date}</h1>
                        </div>

                        <h1 className="comment"> "{comment} "</h1>

                    </div>

                    
           
        )
    }
}
export default CommentIndex;