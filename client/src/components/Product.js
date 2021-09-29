import EditForm from "./EditForm";
import { useState } from "react";

const Product = ({
  id,
  title,
  quantity,
  price,
  onUpdateProduct,
  onDeleteProduct,
  onCartAdd,
  checkItemAvailable,
}) => {
  const [editVisibleForm, setEditVisibleForm] = useState(false);

  const onEditVisibleForm = (e) => {
    e.preventDefault();
    setEditVisibleForm(!editVisibleForm);
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
