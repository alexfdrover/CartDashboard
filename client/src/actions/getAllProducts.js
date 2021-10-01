import axios from "axios";

export const getAllProducts = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/products");
    const data = response.data;
    dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: {
        products: data,
      },
    });
  };
};
