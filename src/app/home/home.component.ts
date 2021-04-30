import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpRequestService } from '../http-request.service';
// import { ProductsService } from '../products.service';
import { Store } from '@ngrx/store';
import * as Products from '../products.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('title') titleEle; 
  public products: any = [];
  public titleMsg: string = 'Welcome to Grocery store';
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new Products.GetProducts());
    this.store.select('products').subscribe(response => {
    // this.productsService.getProducts().subscribe(response => {
      this.products = response.products;

      const colors:string[] = ['#000', '#fff', '#5c5c5c', '#fefefe', 'red'];
      setInterval(() => {
        let index = Math.floor((Math.random() * 10)/2.5);
        this.titleEle.nativeElement.style.setProperty('background-color', colors[index]);
      }, 3000);
    });    
  }
}
