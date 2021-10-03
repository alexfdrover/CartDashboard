import Product from "./Product.js";
import { useEffect } from "react";
import { getAllProducts } from "../actions/getAllProducts.js";
import { useSelector, useDispatch } from "react-redux";

const Products = (props) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
            key={product._id}
            id={product._id}
            title={product.title}
            quantity={product.quantity}
            price={product.price}
            onUpdateProduct={props.onUpdateProduct}
          />
        );
      })}
    </div>
  );
};

export default Products;
