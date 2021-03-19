import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_FROM_CART, DECREASE_FROM_CART } from "../actions/types";

export default function cartReducer (state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { ...state, items: action.payload.cartItems };
    case INCREASE_FROM_CART:
      return { ...state, items: action.payload.cartItems };
    case DECREASE_FROM_CART:
      return { ...state, items: action.payload.cartItems };

    default:
      return state;
  }
}
