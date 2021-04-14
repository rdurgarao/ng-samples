import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { OrderService } from '../order.service';

import { Order } from '../types/order.type';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  public id: string;
  public order: Order;

  constructor(private router: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.id = params['id'];
      this.order = this.orderService.getOrder(this.id);

      console.log(this.order, '????')
    });
  }
}
