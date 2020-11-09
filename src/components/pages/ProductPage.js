import products from "../../data/products.json";
import { Redirect, Link, Route } from "react-router-dom";

function ProductPage({ match }) {
    const product = products.find((product) => product.id === match.params.productId);

    // Redirect to Products page if no product found instead of erroring
    if (!product) return <Redirect to="/products" />;

    return (
        <main>
            <h1>
                {product.name} {product.icon}
            </h1>
            <p>{product.description}</p>
            <p>Product ID: {product.id}</p>
            <p>Category: {product.category}</p>

            {/* Nested route for technical specifications */}
            <Link to={`${match.url}/${product.id}/technical-specifications`}>
                See technical specifications
            </Link>

            <Route path={`${match.url}/${product.id}/technical-specifications`}>
                <h2>Technical specifications</h2>
                <p>{product.technicalSpecs}</p>
            </Route>
        </main>
    );
}

export default ProductPage;
