import { Link } from "react-router-dom";

function ProductsPage() {
    return (
        <main>
            <h1>Products</h1>
            <ul>
                <li>
                    <Link to="/product/chair">Chair</Link>
                </li>
                <li>
                    <Link to="/product/table">Table</Link>
                </li>
                <li>
                    <Link to="/product/desk">Desk</Link>
                </li>
            </ul>
        </main>
    );
}

export default ProductsPage;
