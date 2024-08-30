import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../app-shared/models/all-models';
import { CartService } from '../../../app-shared/services/cart.service';
import { ProductService } from '../../../app-products/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';
import { CommonService } from '../../../app-shared/services/common.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../app-shared/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
}) 
export class SearchBarComponent implements OnInit {
  cartItemCounter:number = 0;
  cartTotalPrice: number = 0;
  showCategorySidebar:boolean;

  loggedInUser$: Observable<any>;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private dialog: MatDialog,
    private commonService: CommonService,
    private router: Router,
    private translate: TranslateService,
    private authService: AuthService,
  ) {}
 
  ngOnInit(): void {
    this.getShowCategorySidebar();
    this.getLoggedInUser();
    this.patchCartInfo();
    this.cartUpdateRealtime(); 
    this.setDefaultLanguage();
  }

  getShowCategorySidebar(){
    if(localStorage.getItem('showCategorySidebar') == 'false'){
      this.showCategorySidebar = false;
    } else {
      this.showCategorySidebar = true;
    }
    
    this.commonService.$showCategorySidebar.subscribe(isOpenSidebar=>{
      this.showCategorySidebar = isOpenSidebar;
    })
  }

  getLoggedInUser(){
    this.loggedInUser$ = this.authService.loggedInUser$;

    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if(loggedInUser){
      this.authService.setLoggedInUser(loggedInUser);
    }
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

  setDefaultLanguage(){
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang() || 'en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
  
  onClickMenuBar(){
    this.showCategorySidebar = this.showCategorySidebar ? false : true; 
    this.commonService.$showCategorySidebar.next(this.showCategorySidebar);
    this.setShowCategorySidebar();
  }

  setShowCategorySidebar(){
    localStorage.setItem('showCategorySidebar', this.showCategorySidebar.toString())
  }

  onClickSignIn(){
    const dialogRef = this.dialog.open(SignInModalComponent, {
      width: '320px',
      disableClose: false,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  cartViewOn(){
    this.productService.$cartViewChange.next(true);
  }

  onLogoClick(){
    this.router.navigate(['']).then((r) => r);
  }

  goToMyAccount(){
    this.router.navigate(['/my-section/profile']).then((r) => r);
  }

  goToAdminPanel(){
    this.router.navigate(['/admin-panel']).then((r) => r);
  }

  onClickSignOut(){
    this.authService.doLoggedOut();
  }

}
