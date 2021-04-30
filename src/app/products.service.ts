import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(private httpReq: HttpRequestService) {
  }

  public getProducts(){
    return this.httpReq.get('products');
  }
}
