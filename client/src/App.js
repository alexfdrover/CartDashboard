import React, { useState } from "react";
import axios from "axios";

import Header from "./components/Header.js";
import Products from "./components/Products.js";
import AddForm from "./components/AddForm.js";

const App = () => {
  const [products, setProducts] = useState([]);

  const onUpdateProduct = async (e, id, title, price, quantity) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/products/${id}`, {
        _id: id,
        title,
        price,
        quantity,
      });
      setProducts(
        products.map((product) => {
          if (product._id === id) {
            return response.data;
          } else {
            return product;
          }
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onNewProduct = async (e, title, price, quantity, callback) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/products`, {
        title,
        price,
        quantity,
      });
      setProducts(products.concat(response.data));
      callback();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="app">
      <Header />

      <main>
        <Products onUpdateProduct={onUpdateProduct} />
        <AddForm onNewProduct={onNewProduct} />
      </main>
    </div>
  );
};

export default App;
