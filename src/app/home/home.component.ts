import { Component, OnInit, ViewChild } from '@angular/core';
import * as productsJSON from '../../data/most_selled_products.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('title') titleEle; 
  public products = [];
  public titleMsg: string = 'Welcome to Grocery store';
  constructor() { }

  ngOnInit(): void {
    this.products = (productsJSON  as  any).default;
    
    const colors:string[] = ['#000', '#fff', '#5c5c5c', '#fefefe', 'red'];
    setInterval(() => {
      let index = Math.floor((Math.random() * 10)/2.5);
      this.titleEle.nativeElement.style.setProperty('background-color', colors[index]);
    }, 3000);
  }
}
