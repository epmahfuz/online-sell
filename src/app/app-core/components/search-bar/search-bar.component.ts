import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../app-shared/models/all-models';
import { CartService } from '../../../app-shared/services/cart.service';
import { ProductService } from '../../../app-products/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';
import { CommonService } from '../../../app-shared/services/common.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
}) 
export class SearchBarComponent implements OnInit {
  cartItemCounter:number = 0;
  cartTotalPrice: number = 0;
  loggedIn = false;
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private dialog: MatDialog,
    private commmonService: CommonService,
    private router: Router,
    private translate: TranslateService
  ) { }
 
  ngOnInit(): void {
    this.patchCartInfo();
    this.cartUpdateRealtime(); 
    
    // Set the default language
    this.translate.setDefaultLang('en');
    // Use the current browser language or the default language
    this.translate.use(this.translate.getBrowserLang() || 'en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
  onClickMenuBar(){
    this.commmonService.$showCategorySidebar.next(true);
  }

  patchCartInfo(){
    let addedInCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    addedInCart.forEach((cartProduct: ProductModel) => {
      this.cartItemCounter += cartProduct.counterInCart;
      this.cartTotalPrice += (cartProduct.price * cartProduct.counterInCart);
    });
  }
  
  cartUpdateRealtime(){
    this.cartService.$updateCartInfo.subscribe((cartItem)=>{
     if(cartItem){

        this.cartTotalPrice +=  cartItem.price * cartItem.counter;
        this.cartItemCounter += cartItem.counter;
      }
    });
  }

  onClickSignIn(){
    const dialogRef = this.dialog.open(SignInModalComponent, {
      width: '320px',
      disableClose: false,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  cartViewOn(){
    this.productService.$cartViewChange.next(true);
  }

  onLogoClick(){
    this.router.navigate(['']).then((r) => r);
  }
  cardVisible = false;

  toggleCardVisibility() {
    this.cardVisible = !this.cardVisible;
    this.router.navigate(['/my-section/profile']).then((r) => r);
  }
}
