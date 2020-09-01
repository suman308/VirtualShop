import React from 'react';
import ProductImagesList from './productImagesList';
class productShow extends React.Component {
    constructor(props){
        super(props)
        
    }
    
    componentDidMount(){
        this.props.getProduct(this.props.match.params.id);
    }
    render(){
           const images = Array.from(this.props.product.imageUrls)
            

        return (
           <div>
              
                <div>
                        <div>
                            <ProductImagesList images={images}/>
                        </div>
                        <div>
                                 <h1>Hello</h1>
                        </div>
                </div>


                {/* <div>
                    <h3>{product1.name}</h3>

                    <h3>{product1.price}</h3>

                    <h3>{product1.details}</h3>
                </div> */}

           </div> 
        )
    }
}

export default productShow;