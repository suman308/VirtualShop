import React from 'react'; 

class ProductImageList extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.images 
    }
    render() {
        return (
            this.state
        )
    }

}