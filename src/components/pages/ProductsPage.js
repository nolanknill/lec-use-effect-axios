import { Link } from "react-router-dom";
import products from "../../data/products.json";

function ProductsPage() {
    return (
        <main>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={"/product/" + product.id}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ProductsPage;
