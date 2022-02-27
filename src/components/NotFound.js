import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>Sorry Page not Found</h2>
            <p>Return to home</p>
            <Link to='/'>
            Back to homepage....
            </Link>
        </div>
     );
}
 
export default NotFound;