import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss']
})
export class ProductsSearchComponent implements OnInit {

  public products: any = [];
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select('products').subscribe(response => {
      // this.productsService.getProducts().subscribe(response => {
        this.products = response.products;
    })
  }

}
