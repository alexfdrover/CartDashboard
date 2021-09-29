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

  const onNewProduct = async (e, title, price, quantity) => {
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

  const onDeleteProduct = async (e, productId) => {
    e.preventDefault();
    try {
      await axios.delete(`/api/products/${productId}`);
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

      const product = products.find((product) => product._id === id);
      const response2 = await axios.put(`/api/products/${id}`, {
        quantity: product.quantity - 1,
      });
      const updatedProduct = response2.data;
      setProducts(
        products.map((product) => {
          if (product._id !== updatedProduct._id) {
            return product;
          } else {
            return updatedProduct;
          }
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const checkItemAvailable = (id) => {
    const productQuantity = products.find((item) => item._id === id).quantity;

    return productQuantity > 0;
  };

  const onCheckout = async () => {
    try {
      await axios.post("/api/cart/checkout");
      setCartItems([]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="app">
      <Header cartItems={cartItems} onCheckout={onCheckout} />

      <main>
        <Products
          products={products}
          onUpdateProduct={onUpdateProduct}
          onDeleteProduct={onDeleteProduct}
          onCartAdd={onCartAdd}
          checkItemAvailable={checkItemAvailable}
        />
        <AddForm onNewProduct={onNewProduct} />
      </main>
    </div>
  );
};

export default App;
