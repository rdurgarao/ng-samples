import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() id: number;
  @Input() cost: number; 
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  public addToCart(){
    this.cartService.setItem({id: this.id, title: this.title, 
      imagePath: this.image, cost: this.cost})
  }

  public getItemCount(item) {
    return item.units;
  }

  public plusItem(item){
    if(item.units <= 19){
      this.cartService.setItem(item);
    }
  }

  public minusItem(item) {
    if(item.units >= 1){
      this.cartService.setItem(item, true);
    }
  }
}
