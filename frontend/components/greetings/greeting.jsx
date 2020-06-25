import React from  'react'; 
import { Link } from 'react-router-dom';
class greeting extends React.Component {
   constructor(props){
       super(props)
   }

    render(){

        const generalGreeting = ()=> {
            return (
                <div>
                    <h1 className="head-greet">Welcome to the best online shop </h1>
                    <br />
                    {/* <Link to={}> </Link>
                    <Link to={}> </Link> */}
            </div>
            )
        }
        return (
            <div> </div>
        )
    }
}
export default greeting;