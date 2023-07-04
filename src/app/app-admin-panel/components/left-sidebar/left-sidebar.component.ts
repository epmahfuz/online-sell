import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onClickProductManagement(){
    this.router.navigate(['admin-panel']).then((r) => r);
  }
  onClickDashboard(){
    this.router.navigate(['admin-panel/dashboard']).then((r) => r);
  } 
}
