import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2>We are sorry</h2>
            <p>The page that you looking is not available</p>
            <Link to='/'>Back to homepage...</Link>
        </div>
    );
}
 
export default NotFound;