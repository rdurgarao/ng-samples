import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
 
import { CartService } from './cart.service';
 
import {
  CartActions,
  CartItemFailure, CartItemSuccess,
  CartActionType,
  UpdateCartItems,
  GetCartItems
} from './cart.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
 
import { LineItem } from './line_item.model';
  
@Injectable()
export class CartEffects {
 
  constructor(
    private actions$: Actions,
    private cartService: CartService
  ) { }
 
  @Effect()
  getCartItems$ = this.actions$.pipe(
    ofType(CartActionType.GET_CART_ITEMS),
    switchMap(() =>
      this.cartService.getItemsFromAPI().pipe(
        map((items: any) => new CartItemSuccess(items)),
        catchError(error => of(new CartItemFailure(error)))
      )
    )
  );

  @Effect()
  updateCartItems$ = this.actions$.pipe(
    ofType(CartActionType.UPDATE_CART_ITEMS),
    switchMap((items) =>
      this.cartService.sendItemsToCartAPI(items).pipe(
        map((items: any) => new CartItemSuccess(items)),
        catchError(error => of(new CartItemFailure(error)))
      )
    )
  );
}