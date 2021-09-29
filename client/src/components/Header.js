import Cart from "./Cart";

const Header = ({ cartItems, onCheckout }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        {cartItems.length !== 0 ? (
          <Cart cartItems={cartItems} onCheckout={onCheckout} />
        ) : (
          <div>
            <p>Your cart is empty</p>
            <p>Total: $0</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
