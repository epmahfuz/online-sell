import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];
  constructor(
    private router: Router,
    private categoryService: CategoryService // Import the CategoryService
  ) { }

  ngOnInit(): void {
    // Call the getAllCategory() function here
    this.getAllCategories();
  }

  onClickAddCategory(){
    this.router.navigate(['admin-panel/add-category']).then((r) => r);
  }

  onClickACategory(categoryId){
    this.router.navigate([`admin-panel/product-list/${categoryId}`]).then((r) => r);
  }

  // Define the function to retrieve all categories
  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(
      (categories:any) => { // Specify the type as any[]
        this.categories = categories.Data;
      },
      (error) => {
        // Handle error
        console.error(error);
      }
    );
  }
}
