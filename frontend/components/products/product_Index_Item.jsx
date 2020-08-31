import React from 'react' 
import ReactDOM from 'react-dom';

class ProductIndexItem extends React.Component  {
        constructor(props){
        super(props)
        }
    render() {
        const productItem = this.props.product
        
        return (
                <div className="outer-most-box" > 
 
                        <div className= "image-holder-box">
                                <img className="image-holder-box" src={productItem.imageUrls[0]} />
                         </div>

                         <div className="rating">
                         </div>

                         <div className="the ">

                         </div>

                         <div className="pic-price-holder">
                                <h4 className="name-of-pic"> {productItem.name}</h4>
                                
                                <h5 className="price-of-pic">  ${productItem.price}</h5>
                         </div>
                                      
                         <div className="below-the-iamge-holder-box"> 
                        
                         </div>
                </div>
       )
   }
}

export default ProductIndexItem