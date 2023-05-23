import { Navigate, useParams } from "react-router-dom";
import products from "../data/products.json";

function ProductPage() {
    const { productId } = useParams();

    const product = products.find((product) => product.id === productId);

    if (!product) {
        return <Navigate to="/products" />
    }

    return (
        <>
            <h1>{product.name} {product.icon}</h1>
            <p>{product.description}</p>
            <p>Product ID: {product.id}</p>
            <p>Category: {product.category}</p>
        </>
    );
}

export default ProductPage;