import products from "../../data/products.json";

function ProductPage(props) {
    const product = products.find((product) => product.id === props.match.params.productId);

    return (
        <main>
            <h1>
                {product.name} {product.icon}
            </h1>
            <p>{product.description}</p>
            <p>Product ID: {product.id}</p>
        </main>
    );
}

export default ProductPage;
