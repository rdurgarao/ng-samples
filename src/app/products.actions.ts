import { Action } from '@ngrx/store';
import { Product } from './product.model';
 
 
export enum ProductActionType {
  GET_PRODUCTS = 'GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED'
}
 
export class GetProducts implements Action {
  readonly type = ProductActionType.GET_PRODUCTS;
}
 
export class GetProductsSuccess implements Action {
  readonly type = ProductActionType.GET_PRODUCTS_SUCCESS;
  constructor(public payload: Array<Product>) { }
}
 
export class GetProductsFailed implements Action {
  readonly type = ProductActionType.GET_PRODUCTS_FAILED;
  constructor(public payload: string) { }
}
 
export type ProductsActions = GetProducts |
  GetProductsSuccess |
  GetProductsFailed;