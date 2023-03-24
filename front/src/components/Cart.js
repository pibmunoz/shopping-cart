import React from 'react'
import { Link } from 'react-router-dom'
import { handleDataLocal, handleDeleteLocal } from '../handlers/handleLocal'

function Cart() {

    return (
        <div className='product-cart'>
            <Link className='back-home' to='/'><button type='button'>Back to home</button></Link>
            {handleDataLocal().map((product) =>
            (
                <div key={product._id} className='individual-product'>
                    <img src={'http://localhost:5000' + product.image} alt={product.name} />
                    <div className='inventory-cart'>
                        <div className='name-brand'>
                            <h3>{product.brand}</h3>
                            <p>{product.name}</p>
                        </div>
                        <div className='price-quantity'>
                            <p><strong>Price: </strong>${product.price}</p>
                            <p><strong>Quantity: </strong>{product.quantity}</p>
                        </div>
                        <div className='total-button'>
                            <p><strong>Total: ${(product.quantity * product.price).toFixed(2)}</strong></p>
                            <button className='delete-button' type='button' onClick={() => handleDeleteLocal(product)}>Delete item</button>
                        </div>
                    </div>
                </div>
            )
            )}
        </div>
    )
}


export default Cart