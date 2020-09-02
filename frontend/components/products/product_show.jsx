import React from 'react';
import ProductImagesList from './productImagesList';
class productShow extends React.Component {
    constructor(props){
        super(props)
        
    }
    
    componentDidMount(){
        // this.props.getProduct(this.props.match.params.id);
        this.props.getProducts()
    }
        render(){
       
         const pro = this.props.product
         const images = pro.imageUrls
        return (
            <div>
           
              
                <div>
                        
                            <ProductImagesList images={images}/>

                     
                        <div>
                                
                        </div>
                </div>


                <div>
                    <h3>{pro.name}</h3>

                    <h3>{pro.price}</h3>

                    <h3>{pro.details}</h3>
                </div>

           </div> 
        )
    }
}

export default productShow;