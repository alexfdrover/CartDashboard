import axios from "axios";

export const addProductToCart = (id, title, price, products) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/api/cart", {
        productId: id,
        title,
        price,
      });
      const item = response.data;

      const product = products.find((product) => product._id === id);
      await axios.put(`/api/products/${id}`, {
        quantity: product.quantity - 1,
      });

      dispatch({
        type: "PRODUCT_ADDED_TO_CART",
        payload: item,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
