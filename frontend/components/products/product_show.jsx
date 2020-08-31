import React from 'react';
class ProductShow extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.getProducts();
    }
    render(){
           const product = this.props.product
           const images = product.imageUrls
           const display = images.map
        return (
           <div>
              
                <div>
                    
                    
                </div>


                <div>
                    <h3>{product.name}</h3>

                    <h3>{product.price}</h3>

                    <h3>{product.details}</h3>
                </div>

           </div> 
        )
    }
}

export default ProductShow;