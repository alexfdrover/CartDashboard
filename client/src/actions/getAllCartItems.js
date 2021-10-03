import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_URL || '/api'

export const getAllCartItems = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(baseUrl + "/cart");
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
