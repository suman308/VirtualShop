import React from 'react'
import { searchIcon } from '../../../app/assets/images/icons'
class Search extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name: ""
        }
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange(e){
       const query = (e.target.value).trim()
       this.setState({
           name: query
           
       })
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.clearProducts();
       this.props.searchProducts(this.state)
       this.setState({name: " "})
    }
    render() {
        return (

            <div className="search" >

                <input type="text" className="search-bar" placeholder="Search for the items"  onChange={this.handleChange}/>
                <div className="submit-button" onClick={this.handleSubmit}>
                    <div className="searchIcon">
                        {searchIcon}
                    </div>
                </div>

            </div >
        )
    }
}
export default Search;