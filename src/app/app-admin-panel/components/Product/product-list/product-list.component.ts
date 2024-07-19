import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service'
import { DecisionModalComponent } from '../../decision-modal/decision-modal.component';
import { MatDialog } from '@angular/material/dialog';
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
    private categoryService: CategoryService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = params.id;
    });
    this.getProductsByCategoryId();
  }
  onClickAddProduct(){
    this.router.navigate([`admin-panel/menu/add-product/${this.categoryId}`]).then((r) => r);
  }
  onClickAdminPanel(){
    this.router.navigate(['admin-panel']).then((r) => r);
  }
  
  getProductsByCategoryId() {
    this.categoryService.getProductByCategoryId(this.categoryId).subscribe(
      (products: any) => {
        this.products = products.Data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onClickAction(event: Event, productId) {
    console.log("onClickAction: ", productId);
    event.stopPropagation();
  }

  editItem(productId){
    this.router.navigate([`admin-panel/menu/edit-product/${productId}`]).then((r) => r);
  }

  deleteItem(productId){
    let toDeleteProduct = this.products.find(x=> x._id==productId);
    console.log("toDeleteProduct: ", toDeleteProduct);
    let data = {
      confirmMessage: "Are you sure you want to delete?"
    }
    const dialogRef = this.dialog.open(DecisionModalComponent, {
      width: '320px',
      disableClose: false,
      data: data
    });
    
    dialogRef.afterClosed().subscribe(confirmDelete => {
      if(confirmDelete){
        let payload = {
          isArchived: true
        }
        this.categoryService.archiveAProduct(payload, productId).subscribe( res=>{
          this.getProductsByCategoryId();
        });
      }
    });
  }
}
