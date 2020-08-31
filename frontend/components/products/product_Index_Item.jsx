import React from 'react';
import {Link } from 'react-router-dom'
class ProductIndexItem extends React.Component  {
        constructor(props){
        super(props)
        }

        handleClick(){
         
        }
    render() {
        const productItem = this.props.product
        
        return (
            
                
                <div className="outer-most-box" > 
 
                        <div className= "image-holder-box">
                                <Link to={`/product/show /${productItem.id}`}  
                                        {<img className="image-holder-box" src={productItem.imageUrls[0]} />}
                                        
                                <Link/>
                         </div>

                         <div className="rating">
                         </div>

                         <div className="free-delivered">

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