import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_FROM_CART,
  DECREASE_FROM_CART,
} from "./types";

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((cp) => {
    if (cp.id === product.id) {
      cp.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};

export const increaseFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().map((a) => {
    if (a.id === product.id) a.count++;
    return a;
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: INCREASE_FROM_CART, payload: { cartItems } });
};

export const decreaseFromCart = (items, product) => (dispatch) => {
  const cartItems =
    product.count > 1
      ? items.slice().map((a) => {
          if (a.id === product.id) a.count--;
          return a;
        })
      : items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: DECREASE_FROM_CART, payload: { cartItems } });
};
