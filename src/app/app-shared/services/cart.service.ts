import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { cartItem } from '../models/all-models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public $updateCartInfo = new Subject<cartItem>();
  constructor() { }
}