import { useState } from "react";

const AddForm = ({ handleNewProduct }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newQuantity, setNewQuantity] = useState("");

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
    <div className="add-form visible">
      <p>
        <a className="button add-product-button">Add A Product</a>
      </p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={newTitle}
            onChange={handleTitleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            value={newPrice}
            onChange={handlePriceChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            value={newQuantity}
            onChange={handleQuantityChange}
          />
        </div>

        <div className="actions form-actions">
          <a
            className="button"
            onClick={(e) =>
              handleNewProduct(e, newTitle, newPrice, newQuantity)
            }
          >
            Add
          </a>
          <a className="button">Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
