import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_URL || '/api'

export const updateProduct = (
  id,
  title,
  price,
  quantity,
  setEditVisibleForm
) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(baseUrl + `/products/${id}`, {
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
