import axios from "axios";

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/products/${id}`);
      dispatch({
        type: "PRODUCT_DELETED",
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
