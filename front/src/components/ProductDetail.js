import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetchDataProducts from '../hooks/useApi'
import handleLocal from '../handlers/handleLocal'


function ProductDetail() {

    // uses the params from the url to fetch the data of one product by id
    const id = useParams().productId;
    const { data } = useFetchDataProducts(`http://localhost:5000/api/products/${id}`);

    return (
        <div className='product-detail-info container'>
            <div className='back-button'>
                <Link to='/'>
                    <button>Back to Home</button>
                </Link>
            </div>
            <div key={data._id} className='individual-card'>
                <img src={'http://localhost:5000' + data.image} alt={data.name} />
                <div className='inventory-info'>
                    <div className='reviews'>
                        <div className='star-review'>
                            <p>Rating: {data.rating}/5</p>
                        </div>
                        <div className='star-review'>
                            <img src='https://www.svgrepo.com/show/474492/pencil.svg' alt='reviews' />
                            <p>({data.numReviews})</p>
                        </div>
                    </div>
                    <Link to={'/products/' + data._id}>
                        <h3>{data.brand}</h3>
                        <p>{data.name}</p>
                    </Link>
                    <p>{data.description}</p>
                    <p>Price: ${data.price}</p>
                    <p>Available Stock: {data.countInStock}</p>
                </div>
                <div className='button-info'>
                    <button disabled={data.countInStock === 0} key={data._id} onClick={() => handleLocal(data)}>Add item to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail