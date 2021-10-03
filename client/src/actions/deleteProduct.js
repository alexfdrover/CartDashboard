import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_URL || '/api'

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(baseUrl + `/products/${id}`);
      dispatch({
        type: "PRODUCT_DELETED",
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
