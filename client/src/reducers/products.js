const products = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS": {
      return action.payload.products;
    }
    case "PRODUCT_CREATED": {
      return state.concat(action.payload);
    }
    case "PRODUCT_EDITED": {
      return state.map((product) => {
        if (product._id === action.payload._id) {
          return action.payload;
        } else {
          return product;
        }
      });
    }
    case "PRODUCT_DELETED": {
      return state.filter((product) =>
        product._id === action.payload.id ? false : true
      );
    }
    case "PRODUCT_ADDED_TO_CART": {
      const addedProduct = action.payload;
      return state.map((product) => {
        if (product._id === addedProduct.productId) {
          const newQuantity = product.quantity - 1;
          return { ...product, quantity: newQuantity };
        } else {
          return product;
        }
      });
    }
    default: {
      return state;
    }
  }
};

export default products;
