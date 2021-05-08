import { Action } from '@ngrx/store';
import { LineItem } from './line_item.model';
 
export enum CartActionType {
  GET_CART_ITEMS = 'GET_CART_ITEMS',
  UPDATE_CART_ITEMS = 'UPDATE_CART_ITEMS',
  CART_ITEMS_SUCCESS = 'CART_ITEMS_SUCCESS',
  CART_ITEMS_FAILURE = 'CART_ITEMS_FAILURE'
}
 
export class GetCartItems implements Action {
  readonly type = CartActionType.GET_CART_ITEMS;
}

export class UpdateCartItems implements Action {
  readonly type = CartActionType.UPDATE_CART_ITEMS;
  constructor(public payload: Array<LineItem>) { }
}

export class CartItemSuccess implements Action {
  readonly type = CartActionType.CART_ITEMS_SUCCESS;
  constructor(public payload: Array<LineItem>) { }
}
 
export class CartItemFailure implements Action {
  readonly type = CartActionType.CART_ITEMS_FAILURE;
  constructor(public payload: string) { }
}
 
export type CartActions = GetCartItems | UpdateCartItems |
  CartItemSuccess |
  CartItemFailure;