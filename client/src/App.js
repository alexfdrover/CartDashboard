import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header.js";
import Products from "./components/Products.js";
import AddForm from "./components/AddForm.js";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/products");
      const data = response.data;
      setProducts(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/cart");
      const data = response.data;
      setCartItems(data);
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

  const handleNewProduct = async (e, title, price, quantity) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/products`, {
        title,
        price,
        quantity,
      });
      setProducts(products.concat(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (e, productId) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`/api/products/${productId}`);
      setProducts(
        products.filter((product) => {
          if (product._id !== productId) {
            return product;
          }
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onCartAdd = async (e, id, title, price) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/cart", {
        productId: id,
        title,
        price,
      });
      const item = response.data;
      const itemExist = cartItems.find((cartItem) => {
        return cartItem.productId === id;
      });
      if (!itemExist) {
        setCartItems(cartItems.concat(item));
      } else {
        setCartItems(
          cartItems.map((cartItem) => {
            if (cartItem.productId !== id) {
              return cartItem;
            } else {
              return item;
            }
          })
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checkItemAvailable = (id) => {
    const productQuantity = products.find((item) => item._id === id).quantity;
    const cartItem = cartItems.find((item) => item.productId === id);
    const cartQuantity = cartItem ? cartItem.quantity : 0;

    return productQuantity > cartQuantity;
  };

  return (
    <div id="app">
      <Header cartItems={cartItems} />

      <main>
        <Products
          products={products}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          onCartAdd={onCartAdd}
          checkItemAvailable={checkItemAvailable}
        />
        <a className="button add-product-button">Add A Product</a>
        <AddForm handleNewProduct={handleNewProduct} />
      </main>
    </div>
  );
};

export default App;
