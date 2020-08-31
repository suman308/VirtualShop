import React from 'react';
class ProductShow extends React.Component {
    constructor(props){
        super(props)
        
    }
    
    componentDidMount(){
        this.props.getProducts();
    }
    render(){
            const product1 = this.props.product
            const images = product1.imageUrls
            const display = images.map(image => <img className="small-image" src={image} />)

        return (
           <div>
              
                <div>
                        <div>
                            {display}
                        </div>
                        <div>
                                 <h1>Hello</h1>
                        </div>
                </div>


                <div>
                    <h3>{product1.name}</h3>

                    <h3>{product1.price}</h3>

                    <h3>{product1.details}</h3>
                </div>

           </div> 
        )
    }
}

export default ProductShow;