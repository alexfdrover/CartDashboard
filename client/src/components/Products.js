import Product from "./Product.js";

const Products = (props) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {props.products.map((product) => {
        return (
          <Product
            key={product._id}
            id={product._id}
            title={product.title}
            quantity={product.quantity}
            price={product.price}
            handleUpdate={props.handleUpdate}
            handleDelete={props.handleDelete}
            onCartAdd={props.onCartAdd}
            checkItemAvailable={props.checkItemAvailable}
          />
        );
      })}
    </div>
  );
};

export default Products;
