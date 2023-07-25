import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/page1">
                <div>Page1</div>
            </Link>
            <Link to="/page2">
                <div>Page2</div>
            </Link>
        </div>
    )
}