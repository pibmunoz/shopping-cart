import React from 'react'
import useFetchDataProducts from '../hooks/useApi'

function Cart() {
    const { data } = useFetchDataProducts('http://localhost:5000/api/products')

    function handleClick() {
        alert('You clicked the button!')
    }


  return (
    <button onClick={handleClick}>
        Clicky
    </button>
   )
}

export default Cart