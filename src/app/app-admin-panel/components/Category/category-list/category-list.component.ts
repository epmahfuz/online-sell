import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service'
import { CommonService } from 'src/app/app-shared/services/common.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
    // Call the getAllCategory() function here
    this.getAllCategories();
  }

  onClickAddCategory() {
    this.router.navigate(['admin-panel/menu/add-category']).then((r) => r);
  }

  onClickACategory(categoryId) {
    this.router.navigate([`admin-panel/menu/product-list/${categoryId}`]).then((r) => r);
  }

  // Define the function to retrieve all categories
  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(
      (categories: any) => { // Specify the type as any[]
        this.categories = categories.Data;
      },
      (error) => {
        // Handle error
        console.error(error);
      }
    );
  }
  onClickAction(event: Event, categoryId) {
    console.log("onClickAction: ", categoryId);
    event.stopPropagation();
  }
  editItem(categoryId){

  }
  deleteItem(categoryId){
    let data = {
      name: "Sample"
    }
    this.commonService.openDecisionModal(data)

  }
}
