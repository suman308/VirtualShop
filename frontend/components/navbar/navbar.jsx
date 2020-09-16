import React from 'react'; 

class Navbar extends React.Component {
constructor(props){
super()
}

render(){
    return (
        <div className="Navbar">
            <h4 className="Category">Art</h4>
            <h4 className="Category">Electronics</h4>
            <h4 className="Category">Books</h4>
            <h4 className="Category">Foods</h4>
            <h4 className="Category">Clothes</h4>
            <h4 className="Category">Shoes</h4>
            <h4 className="Category">Jewelry</h4>
            <h4 className="Category">Other</h4>
        </div>
    )

}
}
export default Navbar;