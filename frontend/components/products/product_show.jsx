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
                        <label htmlfor="quantity" className="label-quantity"> Quantity</label>
                         <br/>
                        <select className="quantity" type="select"> 
                            <option value="1" >1 </option>
                            <option value="2" >2 </option>
                            <option value="3" >3 </option>
                            <option value="4" >4 </option>
                            <option value="5" >5 </option>
                            <option value="6" >6</option>
                            <option value="7" >7 </option>
                            <option value="8" >8</option>
                            <option value="9" >9</option>
                            <option value="10" >10</option>
                            <option value="11" >11 </option>
                            <option value="12" >12 </option>
                            <option value="13" >13 </option>
                            <option value="14" >14</option>
                            <option value="15" >15</option>
                            <option value="16" >16</option>
                            <option value="17" >17</option>
                            <option value="18" >18</option>
                            <option value="19" >19 </option>
                            <option value="20" >20</option>
                            <option value="21" >21</option>
                            <option value="22" >22</option>
                            <option value="23" >23</option>
                            <option value="24" >24</option>
                            <option value="25" >25</option>
                            <option value="26" >26</option>
                            <option value="27" >27</option>
                            <option value="28" >28</option>
                            <option value="29" >29</option>
                            <option value="30" >30</option>
                        </select>  
                    </div>
                
                    <div className="OuterBox-AddToCartContainer">
                        <div className="AddToCartContainer">

                            <div className="AddToCart"> Add to Cart</div>

                        </div>
                    </div>
                </div>
           </div> 
        )
    }
}

export default productShow;