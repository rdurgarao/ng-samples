import { Product } from './product.model';

export type LineItem = Product & {quantity: number};