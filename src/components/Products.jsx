import { Link } from "react-router-dom";
import products from "../data/products.json";

function Products() {
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        {product.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Products;