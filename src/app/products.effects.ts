import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
 
import { ProductsService } from './products.service';
 
import {
  ProductsActions,
  GetProducts, GetProductsFailed,
  GetProductsSuccess,
  ProductActionType
} from './products.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
 
import { Product } from './product.model';
  
@Injectable()
export class ProductsEffects {
 
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) { }
 
  @Effect()
  getProducts$ = this.actions$.pipe(
    ofType(ProductActionType.GET_PRODUCTS),
    switchMap(() =>
      this.productsService.getProducts().pipe(
        map((products: any) => new GetProductsSuccess(products)),
        catchError(error => of(new GetProductsFailed(error)))
      )
    )
  );
}