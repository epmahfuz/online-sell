import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public $showCategorySidebar = new Subject<boolean>();
  constructor(
    private router: Router,
  ) { }

  redirectTo(url){
    this.router.navigate([url]).then((r) => r);
  }
}
