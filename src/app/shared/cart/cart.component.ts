import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { CartService } from 'src/app/cart.service';

import { Store } from '@ngrx/store';
import * as Cart from '../../cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public lineItems = [];
  public total: number;
  public cartVisible: Boolean = false;
  constructor(private cartService: CartService, private eRef: ElementRef, private store: Store<any>) {
   }

  ngOnInit(): void {
    this.store.dispatch(new Cart.GetCartItems());

    this.store.select('cart').subscribe(response => {
      if(!response) return;
      this.lineItems = response.items;
    });
    // this.cartService._items.subscribe(items => {
    //   this.lineItems = items;
    // });

    this.cartService._total.subscribe(total => {
      this.total = total;
    });
  }

  showCart() {
    this.cartVisible = !this.cartVisible;
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

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      console.log("clicked inside");
    } else {
      this.cartVisible = false;
    }
  }
}
