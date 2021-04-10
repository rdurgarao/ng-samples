import {Item} from './item.type';
import {CustomerDetail} from './customerDetail.type';

export interface Order {
    items: Item[],
    total: number, 
    id: string, 
    userId: string, 
    isLoginCustomer: boolean,
    customerDetail?: CustomerDetail
  }