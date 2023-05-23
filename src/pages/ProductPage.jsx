import { Navigate, useParams } from "react-router-dom";
import products from "../data/products.json";
import Products from "../components/Products";

function ProductPage() {
    const { productId } = useParams();
    const product = products.find((product) => product.id === productId);

    if (!product) {
        return <Navigate to="/products" />
    }

    return (
        <>
            <section>
                <h1>{product.name} {product.icon}</h1>
                <p>{product.description}</p>
                <p>Product ID: {product.id}</p>
                <p>Category: {product.category}</p>
            </section>
            <section>
                <h2>More Products:</h2>
                <Products />
            </section>
        </>
    );
}

export default ProductPage;