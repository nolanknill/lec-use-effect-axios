import { useParams } from "react-router-dom";
import axios from "axios";
import Products from "../components/Products";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getProductEndpoint } from "../utils/api";

function ProductPage() {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        axios
            .get(getProductEndpoint(productId))
            .then((response) => {
                setProduct(response.data);
                setIsLoading(false);
            });
    }, [productId]);

    if (isLoading) {
        return <Loading />
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