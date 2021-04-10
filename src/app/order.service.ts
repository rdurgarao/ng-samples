import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { LoginService } from './login.service';
import {Order} from './types/order.type';
import {Item} from './types/item.type';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  public orders: Order[] = [];
  constructor(private cartService: CartService, private loginService: LoginService) { }

  assignCurrentOrderToCustomer(): Order{
    const items: Item[] = this.cartService.getFinalOrderItems();
    const total: number = this.cartService.getFinalTotal();
    const id = Math.random().toString(36).substring(7);

    let order: Order = {
      items: items, 
      total: total, 
      id: id,
      userId: null,
      isLoginCustomer: null,
      customerDetail: null
    }

    if(this.loginService.checkLogin()){
      order.userId = this.loginService.getCurrentUser().id;
      order.isLoginCustomer = true;
    } else {
      order.isLoginCustomer = false; 
      order.customerDetail = this.loginService.getCurrentOneTimeUser();
    }

    this.orders.push(order);
    return order;
  }
}
