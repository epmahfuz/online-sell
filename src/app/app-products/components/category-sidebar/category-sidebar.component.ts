import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.scss']
})
export class CategorySidebarComponent implements OnInit {
  categoryList=[];
  constructor() { }

  ngOnInit(): void {
    for(let i =1; i<=10; i++){
      this.categoryList.push(i);
    }
  }

}
