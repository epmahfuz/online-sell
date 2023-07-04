import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  list: NodeListOf<HTMLLIElement>;
  toggle: HTMLElement;
  navigation: HTMLElement;
  main: HTMLElement;
  contentElements: NodeListOf<HTMLElement>;
  constructor() { }

  ngOnInit(): void {
    // add hovered class to selected list item
    this.list = document.querySelectorAll(".navigation li");
    this.contentElements = document.querySelectorAll(".content");

    this.list.forEach((item) => {
      item.addEventListener("click", () => {
        const itemId = item.id;
        this.contentElements.forEach((content) => {
          if (content.id === `${itemId}-content`) {
            content.style.display = "block";
          } else {
            content.style.display = "none";
          }
        });
        
        this.list.forEach((li) => {
          if (li === item) {
            li.classList.add("hovered");
          } else {
            li.classList.remove("hovered");
          }
        });
      });
    });
    // Menu Toggle
    this.toggle = document.querySelector(".toggle");
    this.navigation = document.querySelector(".navigation");
    this.main = document.querySelector(".main");

    this.toggle.onclick = () => {
      this.navigation.classList.toggle("active");
      this.main.classList.toggle("active");
    };
  }
}
