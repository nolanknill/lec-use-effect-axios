import { Link } from "react-router-dom";
import products from "../../data/products.json";

function ProductsPage(props) {
    const { category } = props.match.params;

    const filteredProducts = category
        ? products.filter((product) => product.category === category)
        : products;

    return (
        <main>
            <h1>Products</h1>
            <p>Check out our many products below! 💰</p>

            {/* Diving deeper: product category filter */}
            {/* <nav>
                <Link to="/products">All</Link>
                <Link to="/products/electronics">Electronics</Link>
                <Link to="/products/gadgets">Gadgets</Link>
            </nav> */}

            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <Link to={"/product/" + product.id}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ProductsPage;
