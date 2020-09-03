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

    handleClick(e){
        
        const num = (this.state.currentPhoto + e.currentTarget.dataset.value) % this.state.photos.length
        this.setState({currentPhoto: num})

        
    }
    render() {
        
        const display = this.state.photos.map((image, k) => <img key={k} data-value={k} className="small-image" src={image} onClick={this.handleClick}/>) 
        const num = this.state.photos.length
        return (
            <div className="inline-images-holder">
                <div className="small-image-holder">
                    {display}
                </div>
                     <br className="break"/>
                <div className="big-image-holder" >
                    <img className="big-image" src={this.state.photos[this.state.currentPhoto ]} />
                </div>
            </div>
        )
    }

}
export default ProductImageList; 