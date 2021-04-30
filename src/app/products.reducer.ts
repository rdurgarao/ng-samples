import { ProductActionType, ProductsActions } from './products.actions';
import { Product } from './product.model';
 
export const initialState = {products: []};
 
export function productsReducer(state = initialState, action: ProductsActions) {
 
  switch (action.type) {
 
    case ProductActionType.GET_PRODUCTS: {
      return { ...state };
    }
 
    case ProductActionType.GET_PRODUCTS_SUCCESS: {
 
      return {
        ...state,
        products: action.payload,
      };
    }
 
    case ProductActionType.GET_PRODUCTS_FAILED: {
      return { ...state };
    }
  }
}