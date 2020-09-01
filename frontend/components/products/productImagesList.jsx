import React from 'react'; 

class ProductImageList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            photos: this.props.images , 
            currentPhoto:0
        }
    }
    render() {
        
        const display = this.state.photos.map((image, k) => <img key={k} className="small-image" src={image} />) 

        return (
            <div>
                {display}
            </div>
        )
    }

}
export default ProductImageList; 