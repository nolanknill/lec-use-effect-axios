import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Ecommerce Website</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/products">Products</Link>
            </nav>
        </header>
    );
}

export default Header;
