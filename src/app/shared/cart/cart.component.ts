import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public lineItems = [];
  public total: number;
  public cartVisible: Boolean = false;
  constructor(private cartService: CartService) {

   }

  ngOnInit(): void {
    this.cartService._items.subscribe(items => {
      this.lineItems = items;
    });

    this.cartService._total.subscribe(total => {
      this.total = total;
    });
  }

  showCart() {
    this.cartVisible = !this.cartVisible;
  }
}
