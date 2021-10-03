import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_URL || '/api'

export const addProductToCart = (id, title, price, products) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(baseUrl + "/cart", {
        productId: id,
        title,
        price,
      });
      const item = response.data;

      const product = products.find((product) => product._id === id);
      await axios.put(baseUrl + `/products/${id}`, {
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
