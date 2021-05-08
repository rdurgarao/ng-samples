import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import { Store } from '@ngrx/store';
import * as Cart from './cart.actions';

import {Item} from './types/item.type';
import { CookieService } from 'ngx-cookie';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})


export class CartService {

  public _items: BehaviorSubject<any> = new BehaviorSubject([]);
  public _total: BehaviorSubject<any> = new BehaviorSubject(0);
  private items: any = [];
  private total:number;

  constructor(private cookieService: CookieService, private httpReq: HttpRequestService, private store: Store<any>) {
    this.getItemsFromAPI().subscribe(response => {
      this.items = response || [];

      this._items.next(this.items);
      let sum = 0;
      this.items.forEach(item => {
        sum = sum + (item.cost * item.units);
      });
  
      this.total = sum;
      this._total.next(this.total);  
    });
  }

  public setItem(item: Item, removeItem=false){
    this.items = this.items.slice(0);
    const matchedItems: Item[] = this.items.filter(it => item.id == it.id);

    if(matchedItems.length > 0){
      let modifiedItems: Item[] = this.items.map(it => {
        it = Object.assign({}, it);
        if(item.id == it.id){

          if(removeItem){
            it['units'] = it['units'] - 1;  
          } else {
            it['units'] = it['units'] + 1;
          }
        }

        return it;
      });

      modifiedItems = modifiedItems.filter(item => item.units > 0);
      this.items = modifiedItems;
    } else {
      if(removeItem){
        this.items = this.items.filter(it => {
          return it.id != item.id;
        });
      } else {
        item['units'] = 1;
        this.items.push(item);  
      }
    }

    this._items.next(this.items);

    let sum = 0;
    this.items.forEach(item => {
      sum = sum + (item.cost * item.units);
    });

    this.total = sum;
    this._total.next(this.total);

    this.setItemsInStorage(this.items);
    // this.sendItemsToCartAPI(this.items);
    this.store.dispatch(new Cart.UpdateCartItems(this.items));
  }

  public sendItemsToCartAPI(items: Item[]){
    return this.httpReq.post('cart', items);
  }

  public setItemsInStorage(items: Item[]) {
    localStorage.setItem('cart', JSON.stringify(items));
  }

  public getItemsFromAPI() {
    return this.httpReq.get('cart');
  }

  public getItemsFromStorage() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  public getItems(){
    return this.items;
  }

  public getTotal(){
    return this.total;
  }

  public createOrder(){
    localStorage.setItem('currentOrder', JSON.stringify(this.items));
  }

  public getFinalOrderItems() {
    return JSON.parse(localStorage.getItem('currentOrder'));
  }

  public getFinalTotal(): number{
    const items: [Item] = JSON.parse(localStorage.getItem('currentOrder'));

    let sum: number = 0;
    items.forEach(item => {
      sum = sum + (item.units * item.cost)
    });

    return sum;
  }

  public clearCart() {
    this.items = [];
    this.total = 0;
    this._items.next([]);
    this._total.next(0);
    localStorage.removeItem('currentOrder');
    localStorage.removeItem('cart');
  }
}
