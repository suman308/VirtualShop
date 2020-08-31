import React from 'react'; 
import ProductIndexItem from './product_Index_Item'

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount(){

     this.props.getProducts()
    }
    render() {
        const products = this.props.products
        const display = products.map(product => <ProductIndexItem product={product} key={product.id} className="productIndex"/>)
        return (
            <div>
            <div className="animation">
                <h3 className="message"> Buy Or Sell anything you like in the most trusted online-shop </h3>
            </div>
            <div className="fixed">
                <ul className="all-products">
                    {display}
                </ul>
                
            </div>  
            </div>    
        )
    }
}




export default ProductIndex

