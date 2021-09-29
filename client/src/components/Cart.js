const Cart = ({ cartItems }) => {
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
      <a className="button checkout">Checkout</a>
    </div>
  );
};

export default Cart;
