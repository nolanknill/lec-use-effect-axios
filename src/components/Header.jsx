import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
    const navLinkActive = ({ isActive }) => {
        if (isActive) {
            return "header__link header__link--active";
        } else {
            return "header__link";
        }
    }

    return (
        <header className="header">
            <h1>E-Commerce Site</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink className={navLinkActive} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={navLinkActive} to="/contact"> 
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={navLinkActive} to="/products">
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;