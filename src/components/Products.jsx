import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { getProductsEndpoint } from "../utils/api";

function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    
    useEffect(() => {
        axios
            .get(getProductsEndpoint)
            .then( (response) => {
                setProducts(response.data);
                setIsLoading(false);
            })
            .catch(() => {
                setHasError(true);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <Loading />
    }

    if (hasError) {
        return <span>There was an unexpected error retrieving the data.</span>
    }
    
    if (products.length === 0) {
        return <span>No products found... Go buy on Amazon instead.</span>
    }

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