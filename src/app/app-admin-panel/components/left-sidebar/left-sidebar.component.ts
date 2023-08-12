import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  toggle: HTMLElement;
  navigation: HTMLElement;
  main: HTMLElement;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    // Menu Toggle
    this.toggle = document.querySelector(".toggle");
    this.navigation = document.querySelector(".navigation");
    this.main = document.querySelector(".main");

    this.toggle.onclick = () => {
      this.navigation.classList.toggle("active");
      this.main.classList.toggle("active");
    };
  }
  onClickProductManagement(){
    this.router.navigate(['admin-panel']).then((r) => r);
  }
  onClickDashboard(){
    this.router.navigate(['admin-panel/dashboard']).then((r) => r);
  } 
}
