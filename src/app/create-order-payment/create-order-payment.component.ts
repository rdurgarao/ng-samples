import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { OrderService } from '../order.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-create-order-payment',
  templateUrl: './create-order-payment.component.html',
  styleUrls: ['./create-order-payment.component.scss']
})
export class CreateOrderPaymentComponent implements OnInit {

  constructor(private cartService: CartService, private orderService: OrderService,
    private route: ActivatedRoute, private router: Router) { }

  public total: number = 0;
  ngOnInit(): void {
    this.total = this.cartService.getFinalTotal();
  }

  paymentConfirmation() {
    const order = this.orderService.assignCurrentOrderToCustomer();

    this.cartService.clearCart();
    this.router.navigate(['/order-details'], { queryParams: {id: order.id}, relativeTo: this.route });
    // console.log(order);
  }
}
