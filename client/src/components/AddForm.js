import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewProduct } from "../actions/createNewProduct";

const AddForm = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [addFormVisible, setAddFormVisible] = useState(false);

  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setNewPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setNewQuantity(e.target.value);
  };

  const resetInputs = () => {
    setNewTitle("");
    setNewPrice("");
    setNewQuantity("");
    setAddFormVisible(!addFormVisible);
  };

  const onFormVisible = (e) => {
    e.preventDefault();
    setAddFormVisible(!addFormVisible);
  };

  const onNewProduct = async (e, title, price, quantity, callback) => {
    e.preventDefault();
    dispatch(createNewProduct(title, price, quantity, callback));
  };

  return addFormVisible ? (
    <div className="add-form visible">
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
            href="/#"
            className="button"
            onClick={(e) =>
              onNewProduct(e, newTitle, newPrice, newQuantity, resetInputs)
            }
          >
            Add
          </a>
          <a href="/#" className="button" onClick={(e) => onFormVisible(e)}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  ) : (
    <p>
      <a
        href="/#"
        className="button add-product-button"
        onClick={(e) => onFormVisible(e)}
      >
        Add A Product
      </a>
    </p>
  );
};

export default AddForm;
