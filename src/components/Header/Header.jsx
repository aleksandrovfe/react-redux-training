import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">Users</Link>
            <Link to="/about">About</Link>
        </header>
    )
}

export default Header
