import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  public lineItems = [];
  public total: number;
  constructor(private cartService: CartService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cartService._items.subscribe(items => {
      this.lineItems = items;
    });

    this.cartService._total.subscribe(total => {
      this.total = total;
    });
  }

  plusCartItem(item) {
    if(item.units <= 19){
      // item.units++;

      this.cartService.setItem(item);
    }
  }

  minusCartItem(item) {
    if(item.units >= 1){
      // item.units--;

      this.cartService.setItem(item, true);
    }
  }

  lockOrder(){
    this.cartService.createOrder();
    this.router.navigate(['/create-payment'], { relativeTo: this.route });
  }
}
