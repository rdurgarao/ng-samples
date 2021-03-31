import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public _items: BehaviorSubject<any> = new BehaviorSubject([]);
  public _total: BehaviorSubject<any> = new BehaviorSubject(0);
  private items = [];
  private total:number;

  constructor() {
    this.items = this.getItemsFromStorage() || [];

    this._items.next(this.items);
    let sum = 0;
    this.items.forEach(item => {
      sum = sum + item.cost * item.units;
    });

    this.total = sum;
    this._total.next(this.total);
  }

  public setItem(item, removeItem=false){
    const matchedItems = this.items.filter(it => item.id == it.id);

    if(matchedItems.length > 0){
      let modifiedItems = this.items.map(it => {
        if(item.id == it.id){

          if(removeItem){
            it['units'] = it['units'] - 1;  
          } else {
            it['units'] = it['units'] + 1;
          }
        }

        return it;
      });

      this.items = modifiedItems;
    } else {
      if(removeItem){
        this.items = this.items.filter(it => {
          return it.id != item.id;
        })
      } else {
        item['units'] = 1;
        this.items.push(item);  
      }
    }

    this._items.next(this.items);

    let sum = 0;
    this.items.forEach(item => {
      sum = sum + item.cost * item.units;
    });

    this.total = sum;
    this._total.next(this.total);

    this.setItemsInStorage(this.items);
  }

  public setItemsInStorage(items) {
    localStorage.setItem('cart', JSON.stringify(items));
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
}
