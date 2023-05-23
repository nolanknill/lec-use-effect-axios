import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>E-Commerce Site</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;