import EditForm from "./EditForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../actions/deleteProduct";
import { addProductToCart } from "../actions/addProductToCart";
import { updateProduct } from "../actions/updateProduct";

const Product = ({ id, title, quantity, price }) => {
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
    dispatch(deleteProduct(id));
  };

  const onCartAdd = async (e, id, title, price) => {
    e.preventDefault();
    dispatch(addProductToCart(id, title, price, products));
  };

  const onUpdateProduct = async (e, id, title, price, quantity) => {
    e.preventDefault();
    dispatch(updateProduct(id, title, price, quantity, setEditVisibleForm));
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
