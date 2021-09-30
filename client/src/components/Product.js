import EditForm from "./EditForm";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ id, title, quantity, price, onUpdateProduct }) => {
  const [editVisibleForm, setEditVisibleForm] = useState(false);

  const dispatch = useDispatch();

  const onEditVisibleForm = (e) => {
    e.preventDefault();
    setEditVisibleForm(!editVisibleForm);
  };

  const products = useSelector((state) => state.products);

  const checkItemAvailable = (id) => {
    const productQuantity = products.find((item) => item._id === id).quantity;

    return productQuantity > 0;
  };

  const onDeleteProduct = async (e, id) => {
    e.preventDefault();
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

  const onCartAdd = async (e, id, title, price) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/cart", {
        productId: id,
        title,
        price,
      });
      const item = response.data;

      const product = products.find((product) => product._id === id);
      await axios.put(`/api/products/${id}`, {
        quantity: product.quantity - 1,
      });

      dispatch({
        type: "PRODUCT_ADDED_TO_CART",
        payload: item,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="product" key={id}>
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a
            href="/#"
            className={
              checkItemAvailable(id)
                ? "button add-to-cart"
                : "button add-to-cart disabled"
            }
            onClick={(e) => onCartAdd(e, id, title, price)}
          >
            Add to Cart
          </a>
          {!editVisibleForm ? (
            <a
              href="/#"
              onClick={(e) => onEditVisibleForm(e)}
              className="button edit"
            >
              Edit
            </a>
          ) : (
            ""
          )}
        </div>
        {editVisibleForm ? (
          <EditForm
            id={id}
            title={title}
            price={price}
            quantity={quantity}
            onUpdateProduct={onUpdateProduct}
            onCancelEditForm={onEditVisibleForm}
          />
        ) : (
          ""
        )}
        <a
          href="/#"
          className="delete-button"
          onClick={(e) => onDeleteProduct(e, id)}
        >
          <span>X</span>
        </a>
      </div>
    </div>
  );
};

export default Product;
