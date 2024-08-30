import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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

  sideBarMenuList = [
    // {
    //   id:"dashboard",
    //   name:"Dashboard",
    //   icon: 'fa-solid fa-house'
    // },
    {
      id:"menu",
      name:"Product Management",
      icon: 'fas fa-file-medical'
    },
    {
      id:"order",
      name:"All Order",
      icon: 'fa-solid fa-clipboard-list'
    }
  ];
  selectedSideBar = '';
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.toggleMenu();
    this.getSelectedNavigation(); 
  }
  
  toggleMenu(){
    // Menu Toggle
    this.toggle = document.querySelector(".toggle");
    this.navigation = document.querySelector(".navigation");
    this.main = document.querySelector(".main");

    this.toggle.onclick = () => {
      this.navigation.classList.toggle("active");
      this.main.classList.toggle("active");
    };
  }
  
  getSelectedNavigation(){
    if(this.router.url.includes('order')){
      this.selectedSideBar = 'order';
    } else if(this.router.url.includes('menu')){
      this.selectedSideBar = 'menu';
    } else{
      this.selectedSideBar = 'menu';
    }
  }

  setSelectedNavigation(id:string){
    this.selectedSideBar = id;
  }

  onClickSidebarChange(id:string){
    this.setSelectedNavigation(id);
    if(id=='dashboard'){
      this.router.navigate(['admin-panel/dashboard']).then((r) => r);
    } else if(id=='menu'){
      this.router.navigate(['admin-panel']).then((r) => r);
    } else if(id=='order'){
      this.router.navigate(['admin-panel/order']).then((r) => r);
    } else {
      this.router.navigate(['admin-panel']).then((r) => r);
    }
  }
  gotoHomePage(){
    this.router.navigate(['']).then((r) => r);
  }
}
