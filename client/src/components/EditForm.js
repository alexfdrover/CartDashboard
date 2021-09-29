import { useState } from "react";

const EditForm = ({ id, title, quantity, price, handleUpdate }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setNewPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setNewQuantity(e.target.value);
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            onChange={handleTitleChange}
            type="text"
            id="product-name"
            value={newTitle}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            onChange={handlePriceChange}
            type="text"
            id="product-price"
            value={newPrice}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            onChange={handleQuantityChange}
            type="text"
            id="product-quantity"
            value={newQuantity}
          />
        </div>

        <div className="actions form-actions">
          <a
            className="button"
            onClick={(e) =>
              handleUpdate(e, id, newTitle, newPrice, newQuantity)
            }
          >
            Update
          </a>
          <a className="button">Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
