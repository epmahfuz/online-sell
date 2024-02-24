import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonService } from '../../../app-shared/services/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from '../../../app-material/snack-bar/service/snack-bar.service';
import { ProductModel } from '../../../app-shared/models/all-models';
import { CartService } from '../../../app-shared/services/cart.service';
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
    private cartService: CartService,
  ) { }

  addedInCart: ProductModel[] = [];
  totalAmountIncart = 0;
  isCartViewOn = false;
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
    paymentMethod: [1, Validators.required] // Initialize the FormControl for the file
  });
  
  ngOnInit(): void {
    this.getLoggedInUser();
    this.cartViewChangeDetect();
    this.categorySidebarChange();
    this.getTotalAmountFirstTime();
    this.getTotalAmountRealTime();
  }
  getLoggedInUser(){
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if(loggedInUser){
      this.form.get('name').setValue(loggedInUser.username);
      this.form.get('phone').setValue(loggedInUser.mobile);
    }
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
  categorySidebarChange(){
    if(localStorage.getItem('showCategorySidebar') == 'false'){
      this.showCategorySidebar = false;
    } else {
      this.showCategorySidebar = true;
    }

    this.commonService.$showCategorySidebar.subscribe(isOpenSidebar=>{
      this.showCategorySidebar = isOpenSidebar;
    })
  }
  getTotalAmountFirstTime(){
    this.totalAmountIncart = 0;
    this.addedInCart = JSON.parse(localStorage.getItem('cart')) || [];
    this.addedInCart.forEach((product:ProductModel) => {
      this.totalAmountIncart += (product.price*product.counterInCart);
    });
  }
  getTotalAmountRealTime() {
    this.cartService.$updateCartInfo.subscribe((cartItem) => {
      this.makeProductList();
    });
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
      "customer": "60f64e9a8a58c500153b1a24",
      "customerName": this.form.get('name').value,
      "customerPhone": this.form.get('phone').value,
      "customerAddress": this.form.get('address').value,
      "paymentMethod": this.paymentMethodMap.get(this.form.get('paymentMethod').value) || "",
      "products": this.makeProductList(),
      "subtotal": this.totalAmountIncart,
      "shippingCost": 50,
      "totalAmount": this.totalAmountIncart+50,
      "status": "Pending"
    }
    return payload;
  }
  makeProductList(){
    this.totalAmountIncart = 0;
    let productInOrder = [];
    this.addedInCart = JSON.parse(localStorage.getItem('cart')) || [];
    this.addedInCart.forEach((product:ProductModel) => {
      this.totalAmountIncart += (product.price*product.counterInCart);
      productInOrder.push(
        {
          "productId": product._id,
          "name": product.name,
          "quantity": product.counterInCart,
          "price": product.price
        }
      );
    });
    return productInOrder;
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
}
