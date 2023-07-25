import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Nav() {
    // const {userid} = useParams()
    return (
        <div className="nav nav-tabs justify-content-center">
            <Link className="nav-link" to="/">
                <div>Home</div>
            </Link>
            <Link className="nav-link" to="/about">
                <div>About</div>
            </Link>
        </div>
    )
}