import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_URL || '/api'

export const getAllProducts = () => {
  return async (dispatch) => {
    const response = await axios.get(baseUrl + "/products");
    const data = response.data;
    dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: {
        products: data,
      },
    });
  };
};
