import axios from "axios";
import { Link } from "react-router-dom";
import { postProductEndpoint } from "../utils/api";
import { useState } from "react";

function AddProductPage() {
    const [createdProduct, setCreatedProduct] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            name: e.target.name.value,
            description: e.target.description.value,
            icon: e.target.icon.value,
            category: e.target.category.value,
            technicalSpecs: e.target.technicalSpecs.value
        }

        axios
            .post(postProductEndpoint, newProduct)
            .then((response) => {
                setCreatedProduct(response.data);
            })
    }

    if (createdProduct) {
        return (
            <>
                <h1>Add a Product</h1>
                <p>The product has been successfully created. You can view the product at <Link to={`/products/${createdProduct.id}`}>{createdProduct.name}</Link></p>
            </>
        )
    }

    return (
        <>
            <h1>Add a Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Name: <input type="text" name="name" /></label>
                <label>Description: <input type="text" name="description" /></label>
                <label>Icon: <input type="text" name="icon" /></label>
                <label>Category: <input type="text" name="category" /></label>
                <label>Technical Specs: <input type="text" name="technicalSpecs" /></label>
                <button>Add product</button>
            </form>
        </>
    )
}

export default AddProductPage;