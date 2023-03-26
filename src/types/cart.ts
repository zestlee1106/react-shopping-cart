import { Product } from "./product";

export interface Cart {
  id: number;
  quantity: number;
  product: Product;
}
