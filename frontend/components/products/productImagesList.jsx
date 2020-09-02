import React from 'react'; 

class ProductImageList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            photos: this.props.images, 
            currentPhoto:0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        
    }
    render() {
        
        const display = this.state.photos.map((image, k) => <img key={k} className="small-image" src={image} onclick={this.handleClick}/>) 
        const num = this.state.photos.length
        return (
            <div className="inline-images-holder">
                <div className="small-image-holder">
                    {display}
                </div>

                <div className="big-image-holder">
                    <img className="big-image" src={this.state.photos[this.state.currentPhoto]} />
                </div>
            </div>
        )
    }

}
export default ProductImageList; 