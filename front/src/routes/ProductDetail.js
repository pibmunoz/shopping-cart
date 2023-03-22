import React from 'react'
import { Link } from 'react-router-dom'
import useFetchDataProducts from '../hooks/useApi'
import { useParams } from 'react-router-dom'

function ProductDetail() {

    const id = useParams().productId;
    const { data } = useFetchDataProducts(`http://localhost:5000/api/products/${id}`)

    return (
        <div className='product-info cards'>
            <div className='back-button'>
                <Link to='/'>
                    <button>Back to Home</button>
                </Link>
            </div>
            <div key={data._id} className='individual-card'>
                <h3>{data.brand}</h3>
                <p>{data.name}</p>
                <img src={'http://localhost:5000' + data.image} alt={data.name} />
                <h4>{data.description}</h4>
                <div className='inventory-info'>
                    <p>Price: ${data.price}</p>
                    <p>Available Stock: {data.countInStock}</p>
                    <p>Reviews: {data.numReviews}</p>
                </div>
                <button disabled={data.countInStock === 0}>Add item to cart</button>
            </div>
        </div>
    )
}

export default ProductDetail