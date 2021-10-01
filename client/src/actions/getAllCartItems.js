import axios from "axios";

export const getAllCartItems = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get("/api/cart");
      const data = response.data;
      dispatch({
        type: "GET_ALL_CART_ITEMS",
        payload: {
          cartItems: data,
        },
      });
    };
    fetchData();
  };
};
