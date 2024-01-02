import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonService } from '../../../app-shared/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarService } from '../../../app-shared/snack-bar/service/snack-bar.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private commonService: CommonService,
    private fb: FormBuilder,
    private snackBarService: SnackBarService,
  ) { }

  isCartViewOn = true;
  showCategorySidebar = true;
  imgUploading = false;
  isSaving = false;
  paymentMethodMap = new Map<number, string>([
    [1, "CashOnDelivery"],
    [2, "Bkash"],
    [3, "Nagad"],
    [4, "Rocket"],
  ]);
  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required], // Initialize the FormControl for the file
    address: ['', Validators.required], // Initialize the FormControl for the file
    paymentMethod: ['', Validators.required] // Initialize the FormControl for the file
  });
  
  ngOnInit(): void {
    this.cartViewChangeDetect();
    this.categorySidebarChange();
  }
  
  categorySidebarChange(){
    this.commonService.$showCategorySidebar.subscribe(isOpenSidebar=>{
      this.showCategorySidebar = this.showCategorySidebar ? false : true;
    })
  }

  findValue(){
    this.form.get('email').value;
  }

  onClickPlaceOrder(){
    this.isSaving = true;
    this.orderPlace();
  }

  orderPlace(){
    let payload = this.makeOrderPayload();
    this.productService.addOrder(payload).subscribe(
      (response : any) => {
        this.isSaving = false;
        console.log("response: ", response);
        this.openSuccessSnackBar();
        this.makeEmptyCart();
        this.redirectToHomePage();
      },
      (error) => {
        this.isSaving = false;
        console.log("error: ", error);
      }
    );
  }

  makeOrderPayload(){
    console.log("df", this.form.get('paymentMethod').value, this.paymentMethodMap.get(this.form.get('paymentMethod').value));
    let payload = {
      "name": "Sample Order",
      "image": "sample_image_url.jpg",
      "isActive": true,
      "isArchived": false,
      "orderId": "12345629",
      "customer": "60f64e9a8a58c500153b1a24", // ObjectId referring to a User
      "customerName": this.form.get('name').value,
      "customerPhone": this.form.get('phone').value,
      "customerAddress": this.form.get('address').value,
      "paymentMethod": this.paymentMethodMap.get(this.form.get('paymentMethod').value) || "",
      "products": [
        {
          "productId": "60f64e9a8a58c500153b1a25", // ObjectId referring to a Product
          "quantity": 2,
          "price": 29.99
        },
        {
          "productId": "60f64e9a8a58c500153b1a26", // ObjectId referring to another Product
          "quantity": 1,
          "price": 39.99
        }
      ],
      "totalAmount": 99.97,
      "status": "Processing"
    }
    return payload;
  }

  openSuccessSnackBar(){
    this.snackBarService.openSnackBar({
      message: 'Order placed successfully',
      icon: 'create',
      status: 'create',
    });
  }
  
  makeEmptyCart(){
    localStorage.removeItem('cart');
  }

  redirectToHomePage(){
    this.commonService.redirectTo('');
  }

  cartViewChangeDetect() {
    this.productService.$cartViewChange.subscribe((cartViewStatus: boolean) => {
      if(this.isCartViewOn){
        this.isCartViewOn = false;
      } else {
        this.isCartViewOn = true;
      }
    })
  }

}
