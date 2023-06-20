import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  list: NodeListOf<HTMLLIElement>;
  toggle: HTMLElement;
  navigation: HTMLElement;
  main: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    // add hovered class to selected list item
    this.list = document.querySelectorAll(".navigation li");

    const activeLink = (item: HTMLLIElement) => {
      this.list.forEach((li: HTMLLIElement) => {
        li.classList.remove("hovered");
      });
      item.classList.add("hovered");
    };

    this.list.forEach((item: HTMLLIElement) => item.addEventListener("mouseover", () => activeLink(item)));

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
