import { CartActionType, CartActions } from './cart.actions';
 
export const initialState = {items: []};
 
export function cartReducer(state = initialState, action: CartActions) {
 
  switch (action.type) {
    case CartActionType.GET_CART_ITEMS: {
      return { ...state };
    }

    case CartActionType.UPDATE_CART_ITEMS: {
      return { ...state };
    }
 
    case CartActionType.CART_ITEMS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
      };
    }
 
    case CartActionType.CART_ITEMS_FAILURE: {
      return { ...state };
    }
  }
}