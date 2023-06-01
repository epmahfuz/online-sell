import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public $categorySidebar = new Subject<boolean>();
  constructor() { }
}
