import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  onClickAddCategory(){
    this.router.navigate(['admin-panel/add-category']).then((r) => r);
  }
  onClickACategory(){
    this.router.navigate(['admin-panel/product-list']).then((r) => r);
  }
}
