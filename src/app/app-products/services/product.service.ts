import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public $cartViewChange = new Subject<boolean>();
  public $selectedCategoryId = new Subject<string>();
  constructor() { }
}
