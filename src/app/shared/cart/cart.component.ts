import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public lineItems = [];
  public total: number;
  public cartVisible: Boolean = false;
  constructor() {

   }

  ngOnInit(): void {
    this.lineItems = [{
      name: 'sample',
      units: 2,
      cost: 40
    },{
      name: 'sample 2',
      units: 4,
      cost: 80
    }, {
      name: 'sample 3',
      units: 5,
      cost: 120
    }];

    let sum = 0;
    this.lineItems.forEach(item => {
      sum = sum + item.cost;
    });

    this.total = sum;
  }

  showCart() {
    this.cartVisible = !this.cartVisible
  }
}
