import axios from "axios";

export const createNewProduct = (title, price, quantity, callback) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/api/products`, {
        title,
        price,
        quantity,
      });
      dispatch({
        type: "PRODUCT_CREATED",
        payload: response.data,
      });
      callback();
    } catch (err) {
      console.log(err);
    }
  };
};
