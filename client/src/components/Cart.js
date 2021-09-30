import axios from "axios";
import { useDispatch } from "react-redux";

const Cart = ({ cartItems }) => {
  const dispatch = useDispatch();

  const onCheckout = async () => {
    try {
      await axios.post("/api/cart/checkout");
      dispatch({
        type: "CART_CHECKOUT",
        payload: {},
      });
    } catch (err) {
      console.log(err);
    }
  };

  const totalCost = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return Math.round(total * 100) / 100;
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <tbody>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {cartItems.map((item) => {
            return (
              <tr key={item.productId}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}

          <tr>
            <td colSpan="3" className="total">
              Total: ${totalCost()}
            </td>
          </tr>
        </tbody>
      </table>
      <a href="/#" className="button checkout" onClick={onCheckout}>
        Checkout
      </a>
    </div>
  );
};

export default Cart;
