import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  constructor(
    private router: Router,
    private categoryService: CategoryService // Import the CategoryService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  onClickAddProduct(){
    this.router.navigate(['admin-panel/add-product']).then((r) => r);
  }
  onClickAdminPanel(){
    this.router.navigate(['admin-panel']).then((r) => r);
  }
    // Define the function to retrieve all categories
    getAllProducts() {
      this.categoryService.getAllProduct().subscribe(
        (products: any[]) => { // Specify the type as any[]
          this.products = products;
        },
        (error) => {
          // Handle error
          console.error(error);
        }
      );
    }

}
