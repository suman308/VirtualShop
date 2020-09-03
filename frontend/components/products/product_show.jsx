import React from 'react';
import ProductImagesList from './productImagesList';
class productShow extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            quantity:" "
        }
        
    }
    
    componentDidMount(){
        // this.props.getProduct(this.props.match.params.id);
        this.props.getProducts()
    }
        render(){
       
         const pro = this.props.product
         const images = pro.imageUrls
        return (
            <div className="inline-images-holder">
           
              
                <div className="productInformation"> 
                            
                                <ProductImagesList images={images}/>

                        
                            <div>
                                    
                            </div>
                    </div>

                <div className="Outer-productInformation">
                    <div className="productInformation">
                        <h3 className="productName">{pro.name}</h3>

                        <h3 className="productPrice">${pro.price}</h3>

                        <h3 className="productDetails">{pro.details}</h3>
                    </div>

                    <div className="quantityContainer">
                        <label className="label-quantity"> Quantity
                        <input className="quantity" type="integer"/> 
                        </label>
                    </div>

                    <div className="AddToCartContainer">

                        <div className="AddToCart"> Add to Cart</div>

                    </div>
                </div>
           </div> 
        )
    }
}

export default productShow;