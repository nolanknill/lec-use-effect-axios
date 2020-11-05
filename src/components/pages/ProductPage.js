function ProductPage(props) {
    return (
        <main>
            <h1>Product: {props.match.params.productId}</h1>
        </main>
    );
}

export default ProductPage;
