import React from 'react'; 

class ProductImageList extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.images 
    }
    render() {
        const photos = this.state 
        const display = photos.map((image, k) => <img key={k} className="small-image" src={image} />) 
        return (
            {display}
        )
    }

}
export default ProductImageList; 