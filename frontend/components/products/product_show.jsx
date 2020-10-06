import React from 'react';
import ProductImagesList from './productImagesList';
import Comment from '../comments/commentContainer'

class ProductShow extends React.Component {
    constructor(props){
        super()
        this.state ={
            quantity:" ", 
            modal: " ",
            cart_id:"", 
            product_id:"", 
            checked_out: false 
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.closeAlert = this.closeAlert.bind(this)
    }
    
    componentDidMount(){
    
    this.props.getProduct(this.props.match.params.id) 
    this.props.getCarts()
    
       
    } 
    closeAlert(){
        this.setState({modal:""})
    }

    handleChange(e) {
        if (this.props.currentUser ){
            const product_id = this.props.product.id
            const Id = this.props.currentUser.id
            const carts = Array.from(this.props.carts)
            const cart = carts.find(car => car.user_id == Id)
            console.log(cart)
            const cart_id = cart.id
            const q = parseInt(e.currentTarget.value)
            this.setState({quantity : q })
            this.setState({cart_id : cart_id})
            this.setState({ product_id: product_id})
            console.log(this.state)

        }else {
            this.setState({modal: <div className="modal-background" onClick={this.closeAlert}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className="alert-box"> 
                     ! Alert !
                        <div className="alert-message">
                            you need to sign up to put the product to the cart
                        </div>
                    </div>
                   
                    
                </div>
        </div> })
        }
    }
    handleSubmit(e){
        e.preventDefault();
        
        this.props.addToCart(this.state); 
  
    }
    render(){
       
         const pro = this.props.product
         const carts = this.props.carts
         if (pro && carts) {
            const images = pro.imageUrls
        return (
            <div>
               {this.state.modal}
                    <form onSubmit={this.handleSubmit}>
                    <div className="inline-images-holder">
                
                    
                                    <div className="productInformation"> 
                                            
                                                <ProductImagesList images={images}/>

                                            <div>
                                                  <Comment/>  
                                            </div>
                                    </div>

                        <div className="Outer-productInformation">
                            <div className="productInformation">
                                <h3 className="productName">{pro.name}</h3>

                                <h3 className="productPrice">${pro.price}</h3>

                                <h3 className="productDetails">{pro.details}</h3>
                            </div>



                            <div className="quantityContainer">
                                <label htmlFor="quantity" className="label-quantity"> Quantity</label>
                                <br/>
                                <select className="quantity" type="select" onChange={this.handleChange}> 
                                    <option value="0" >0 </option>
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

                                    <input type="submit" className="AddToCart" value="Add to Cart"/>

                                </div>
                            </div>
                        </div>
                    </div> 
                    </form>
            </div>
        ) }
        else {
            return null
        }
    }
}

export default ProductShow;