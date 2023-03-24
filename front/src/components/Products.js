import React, { useMemo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetchDataProducts from '../hooks/useApi'
import handleLocal from '../handlers/handleLocal'
import { handleDataLocal } from '../handlers/handleLocal'

function ProductList() {
    const { data } = useFetchDataProducts('http://localhost:5000/api/products')

    // use hook to get quantity of items in cart
    const [quantity, setQuantity] = useState([]);
    function sumItemsQuantity(items) {
        setQuantity(Object.values(items).reduce((acc, { quantity }) => acc + quantity, 0));

    }

    // join two functions to add items to cart and update quantity
    function sumItemsByClicking(product) {
        handleLocal(product);
        sumItemsQuantity(handleDataLocal());
    }

    // use hook to save quantity in local storage and not lose it when refreshing
    useEffect(() => {
        const storedCount = localStorage.getItem('quantity');
        if (storedCount !== null) {
            setQuantity(parseInt(storedCount));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('quantity', quantity.toString());
    }, [quantity]);



    return (
        <div className='container'>
            <Link className='cart-products' to='/cart'>
                <img src='https://www.svgrepo.com/show/509786/cart.svg' alt='cart' />
                Cart {quantity}
            </Link>
            <div className='products-info'>
                {data.map((product) =>
                (
                    <div key={product._id} className='individual-card'>
                        <img src={'http://localhost:5000' + product.image} alt={product.name} />
                        <div className='inventory-info'>
                            <div className='reviews'>
                                <div className='star-review'>
                                    <p>Rating: {product.rating}/5</p>
                                </div>
                                <div className='star-review'>
                                    <img src='https://www.svgrepo.com/show/474492/pencil.svg' alt='reviews' />
                                    <p>({product.numReviews})</p>
                                </div>
                            </div>
                            <Link to={'/products/' + product._id}>
                                <h3>{product.brand}</h3>
                                <p>{product.name}</p>
                            </Link>
                            <p>Price: ${product.price}</p>
                            <p>Available Stock: {product.countInStock}</p>
                        </div>
                        <div className='button-info'>
                            <button disabled={product.countInStock === 0} key={product._id} onClick={() => sumItemsByClicking(product)}>Add item to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList