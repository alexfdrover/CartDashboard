import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_URL || '/api'

export const createNewProduct = (title, price, quantity, callback) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(baseUrl + `/products`, {
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
