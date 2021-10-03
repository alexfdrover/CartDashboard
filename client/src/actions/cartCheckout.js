import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_URL || '/api'

export const cartCheckout = () => {
  return async (dispatch) => {
    try {
      await axios.post(baseUrl + "/cart/checkout");
      dispatch({
        type: "CART_CHECKOUT",
        payload: {},
      });
    } catch (err) {
      console.log(err);
    }
  };
};
