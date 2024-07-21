import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/products');
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_FAIL', payload: error.message });
    }
};
