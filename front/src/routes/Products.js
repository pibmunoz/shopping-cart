import React from 'react'
import ProductCard from '../components/ProductCard'
import useFetchDataProducts from '../hooks/useApi'

function ProductList() {
    const { data } = useFetchDataProducts('http://localhost:5000/api/products')
    // const imageUrl = `${images}${data}`;
    return (
        <div>
            <div className='product-info cards'>
                {data.map((product) =>
                (
                    <div key={product._id} className='individual-card'>
                        <h3>{product.brand}</h3>
                        <p>{product.name}</p>
                        <img src={'http://localhost:5000' + product.image} alt={product.name}/>
                        <div className='inventory-info'>
                            <p>Price: ${product.price}</p>
                            <p>Available Stock: {product.countInStock}</p>
                            <p>Reviews: {product.numReviews}</p>
                        </div>
                        <button disabled={product.countInStock === 0}>Add item to cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList