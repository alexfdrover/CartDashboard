import axios from "axios";

export const cartCheckout = () => {
  return async (dispatch) => {
    try {
      await axios.post("/api/cart/checkout");
      dispatch({
        type: "CART_CHECKOUT",
        payload: {},
      });
    } catch (err) {
      console.log(err);
    }
  };
};
