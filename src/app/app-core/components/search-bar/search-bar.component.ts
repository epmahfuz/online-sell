import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../app-shared/models/all-models';
import { CartService } from '../../../app-shared/services/cart.service';
import { ProductService } from '../../../app-products/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
}) 
export class SearchBarComponent implements OnInit {
  cartItemCounter:number = 0;
  cartTotalPrice: number = 0;
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private dialog: MatDialog
  ) { }
 
  ngOnInit(): void {
    this.patchCartInfo();
    this.cartUpdateRealtime();
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
}
