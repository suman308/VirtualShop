import React from 'react'
import { searchIcon} from '../../../app/assets/images/icons'
class Search extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return (
            
                <form className="search" >

                    <input type="text" className="search-bar" placeholder="Search for the items" />
                    <div className="submit-button">
                        <div className="searchIcon">
                            {searchIcon}
                        </div>
                    </div>

                </form >
        )
    }
}
export default Search;