import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import Cart from "./components/Cart";
import banner from './assets/banner.svg';
import './components/Products.css'
import './components/Cart.css'

const App = () => {
  return (
    <div style={{ textAlign: "center" }} className='container'>
      <img className='banner' src={banner} alt='Examtechy store' />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
