import EditForm from "./EditForm";

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
          <a href="/#" className="button edit">
            Edit
          </a>
        </div>
        <EditForm
          id={id}
          title={title}
          price={price}
          quantity={quantity}
          onUpdateProduct={onUpdateProduct}
        />
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
