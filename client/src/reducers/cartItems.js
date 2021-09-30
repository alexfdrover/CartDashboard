const cartItems = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_CART_ITEMS": {
      return action.payload.cartItems;
    }
    case "PRODUCT_ADDED_TO_CART": {
      const itemExist = state.find((cartItem) => {
        return cartItem.productId === action.payload.productId;
      });

      if (!itemExist) {
        return state.concat(action.payload);
      } else {
        return state.map((cartItem) => {
          if (cartItem.productId !== action.payload.productId) {
            return cartItem;
          } else {
            return action.payload;
          }
        });
      }
    }
    case "CART_CHECKOUT": {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default cartItems;
