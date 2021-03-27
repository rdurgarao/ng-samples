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

  constructor() {}

  public setItem(item){
    const matchedItems = this.items.filter(it => item.id == it.id);

    if(matchedItems.length > 0){
      let modifiedItems = this.items.map(it => {
        if(item.id == it.id){
          it['units'] = it['units'] + 1;
        }

        return it;
      });

      this.items = modifiedItems;
    } else {
      item['units'] = 1;
      this.items.push(item);
    }

    this._items.next(this.items);

    let sum = 0;
    this.items.forEach(item => {
      sum = sum + item.cost * item.units;
    });

    this.total = sum;
    this._total.next(this.total);
  }

  public getItems(){
    return this.items;
  }

  public getTotal(){
    return this.total;
  }
}
