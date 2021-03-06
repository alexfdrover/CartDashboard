import Cart from "./Cart";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartItems } from "../actions/getAllCartItems";

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    dispatch(getAllCartItems());
  }, [dispatch]);

  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        {cartItems.length !== 0 ? (
          <Cart cartItems={cartItems} />
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
