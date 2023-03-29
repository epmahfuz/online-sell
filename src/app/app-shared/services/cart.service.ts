import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public $updateMiniCart = new Subject<cartItem>();
  constructor() { }
}

export interface cartItem {
  price: number,
  counter: number
}