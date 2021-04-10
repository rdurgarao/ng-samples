import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-create-order-payment',
  templateUrl: './create-order-payment.component.html',
  styleUrls: ['./create-order-payment.component.scss']
})
export class CreateOrderPaymentComponent implements OnInit {

  constructor(private cartService: CartService, private orderService: OrderService) { }

  public total: number = 0;
  ngOnInit(): void {
    this.total = this.cartService.getFinalTotal();
  }

  paymentConfirmation() {
    alert('in')
    const order = this.orderService.assignCurrentOrderToCustomer();

    console.log(order);
  }
}
