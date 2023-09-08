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
    this.openSuccessSnackBar();
    this.makeEmptyCart();
    this.redirectToHomePage();
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
