import axios from "axios";

export const updateProduct = (
  id,
  title,
  price,
  quantity,
  setEditVisibleForm
) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/products/${id}`, {
        _id: id,
        title,
        price,
        quantity,
      });
      dispatch({
        type: "PRODUCT_EDITED",
        payload: response.data,
      });
      setEditVisibleForm(false);
    } catch (err) {
      console.log(err);
    }
  };
};
