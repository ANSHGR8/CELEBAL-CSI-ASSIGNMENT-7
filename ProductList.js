import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [view, setView] = useState('grid');

    useEffect(() => {
        axios.get('/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <button onClick={() => setView('grid')}>Grid View</button>
            <button onClick={() => setView('list')}>List View</button>
            <div className={view}>
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
