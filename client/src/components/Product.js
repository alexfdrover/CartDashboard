import EditForm from "./EditForm";

const Product = ({ id, title, quantity, price, handleUpdate }) => {
  return (
    <div className="product" key={id}>
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a className="button add-to-cart">Add to Cart</a>
          <a className="button edit">Edit</a>
        </div>
        <EditForm
          id={id}
          title={title}
          price={price}
          quantity={quantity}
          handleUpdate={handleUpdate}
        />
        <a className="delete-button">
          <span>X</span>
        </a>
      </div>
    </div>
  );
};

export default Product;
