import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
//import { DecisionModalComponent } from '../components/decision-modal/decision-modal.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public $showCategorySidebar = new Subject<boolean>();
  constructor(
    private router: Router,
    //private dialog: MatDialog,
  ) { }

  redirectTo(url){
    this.router.navigate([url]).then((r) => r);
  }
  public openDecisionModal(data) {
    // this.dialog.open(DecisionModalComponent, {
    //   width: '800px',
    //   disableClose: true,
    //   data: data
    // });
  }
}
