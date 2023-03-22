import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Products from "./routes/Products";
import ProductDetail from "./routes/ProductDetail";
import Cart from "./routes/Cart";
import "./App.css";

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  // const [response, setResponse] = useState("");

  // // call server to see if its running
  // useEffect(() => {
  //   const getApiResponse = () => {
  //     fetch("http://localhost:5000/")
  //       .then((res) => res.text())
  //       .then((res) => setResponse(res));
  //   };
  //   getApiResponse();
  // }, []);
  // // -------------------------------------------------

  return (
    <div style={{ textAlign: "center" }} className='container'>
      <h1>Examply Commerce</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      {/* <h5>{response}</h5> */}
    </div>
  );
};

export default App;
