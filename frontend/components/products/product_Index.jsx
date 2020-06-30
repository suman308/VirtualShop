import React from 'react'; 
import ProductIndexItem from './product_Index_Item'

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount(){
     this.props.getProducts
    }
    render() {
        const products = this.props.products
        const display = products.map(product => <ProductIndexItem product={product} key={product.id}/>)
        return (
            <ul>
                {display}
            </ul>
              
        )
    }
}




export default ProductIndex

