import React from 'react' 


function ProductIndexItem (props) {
    const productItem = props.product
    return (
        <div> 

                <figure>
                        <img src="" alt="" />
                        <imagecaption> {product.name}</imagecaption>
                </figure> 
                            
                <div>
                        <h5>{productItem.price}</h5>
                        <h5>{productItem.rating}</h5>
                        <p>{productItem.details}</p>
                
                </div>

        </div>
    )
}

export default ProductIndexItem