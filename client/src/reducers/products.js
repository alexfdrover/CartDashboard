const products = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS": {
      return action.payload.products;
    }
    case "PRODUCT_CREATED": {
      // create a new product object
      // action {
      //   type: "PRODUCT_ADDED",
      //   payload: {
      //      newProduct: product from backend
      //   }
      // }
      // add new product object to state via concat
    }
    case "PRODUCT_EDITED": {
      /*
        get the editedProduct from back end
        // action {
        //   type: "PRODUCT_EDITED",
        //   payload: {
        //      editedProduct
        //   }
        // }
        // update the state
        // state.map(pro => ) // if product._id === editedProduct._id return editedProduct, if not, return product
      */
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
