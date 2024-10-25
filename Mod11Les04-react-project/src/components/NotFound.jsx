import { Link } from "react-router-dom";

function NotFound() {
    return (
       <div>
        <h2>404 - Page Not Found</h2>
        <p>The requested page is not found! </p>
        <p>
            Return <Link to="/">Home</Link>
        </p>
       </div> 
    )
}

export default NotFound;