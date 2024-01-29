import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  categoryId:string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService // Import the CategoryService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = params.id;
    });
    this.getProductsByCategoryId(this.categoryId);
  }
  onClickAddProduct(){
    this.router.navigate([`admin-panel/menu/add-product/${this.categoryId}`]).then((r) => r);
  }
  onClickAdminPanel(){
    this.router.navigate(['admin-panel']).then((r) => r);
  }
  
  getProductsByCategoryId(categoryId:string) {
    this.categoryService.getProductByCategoryId(categoryId).subscribe(
      (products: any) => {
        this.products = products.Data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
