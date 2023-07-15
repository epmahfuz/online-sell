import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from '../../services/category.service'
// import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @ViewChild('productInput') productInput!: ElementRef;
  @ViewChild('descriptionInput') descriptionInput!: ElementRef;
  @ViewChild('quantityInput') quantityInput!: ElementRef;
  @ViewChild('priceInput') priceInput!: ElementRef;

  constructor(
    private router: Router,
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
  }
  onClickProductList()
  {
    this.router.navigate(['admin-panel/product-list']).then((r) => r);
  }

  onClickAddProduct(){
    const productName = this.productInput.nativeElement.value;
    const productDescription = this.descriptionInput.nativeElement.value;
    const productQuantity = this.quantityInput.nativeElement.value;
    const productPrice = this.priceInput.nativeElement.value;
    // const productId = uuidv4();
    // console.log("Category Name:", productName);

    let productPayload = {
      categoryId: '64b222db9dbb9f23cc4fb0c3', // Add the unique ID to the productPayload object
      name: productName,
      description:productDescription,
      quantity:productQuantity,
      price:productPrice
    };

    console.log(productPayload);

    this.categoryService.addProduct(productPayload).subscribe(res => {
      console.log("A product created !: ", res);
    });
  }

}
