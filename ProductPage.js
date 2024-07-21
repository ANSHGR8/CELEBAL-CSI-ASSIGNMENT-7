import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductPage = ({ match }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`/api/products/${match.params.id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error(error));
    }, [match.params.id]);

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductPage;
