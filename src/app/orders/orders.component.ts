import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

import { OrderService } from '../order.service';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [NgbAccordionConfig]
})
export class OrdersComponent implements OnInit {

  public orders = [];
  constructor(private orderService: OrderService, config: NgbAccordionConfig,
    private route: ActivatedRoute, private router: Router) {
      config.closeOthers = false;
     }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

  navigateToOrder(id: string) {
    this.router.navigate(['/order-details'], { queryParams: {id: id}});
  }
}
