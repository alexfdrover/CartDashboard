import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header.js";
import Products from "./components/Products.js";
import AddForm from "./components/AddForm.js";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/products");
      const data = response.data;
      setProducts(data);
      console.log(data);
    };
    fetchData();
  }, []);

  const handleUpdate = async (e, id, title, price, quantity) => {
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

  return (
    <div id="app">
      <Header />

      <main>
        <Products products={products} handleUpdate={handleUpdate} />
        <a className="button add-product-button">Add A Product</a>
        <AddForm />
      </main>
    </div>
  );
};

export default App;
