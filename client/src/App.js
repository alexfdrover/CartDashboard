import React, { useState, useEffect } from "react";

import Header from "./components/Header.js";
import Products from "./components/Products.js";
import AddForm from "./components/AddForm.js";

import data from "./lib/data.js";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div id="app">
      <Header />

      <main>
        <Products products={products} />
        <a className="button add-product-button">Add A Product</a>
        <AddForm />
      </main>
    </div>
  );
};

export default App;
