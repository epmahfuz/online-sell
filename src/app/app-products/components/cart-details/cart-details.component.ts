import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../app-shared/models/all-models';
import { CartService } from '../../../app-shared/services/cart.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  addedInCart: ProductModel[] = [];
  cartItemCounter:number = 0;
  cartTotalPrice: number = 0;
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.patchCartInfo();
    this.cartUpdateRealtime();
  }

  patchCartInfo() {
    this.addedInCart = JSON.parse(localStorage.getItem('cart')) || [];

    this.cartItemCounter = 0;
    this.cartTotalPrice = 0;
    this.addedInCart.forEach((cartProduct: ProductModel) => {
      this.cartItemCounter += cartProduct.counterInCart;
      this.cartTotalPrice += (cartProduct.price * cartProduct.counterInCart);
    });
  }

  cartUpdateRealtime() {
    this.cartService.$updateCartInfo.subscribe((cartItem) => {
      if (cartItem) {
        this.patchCartInfo();
      }
    });
  }

  addToCart(product:ProductModel){
    product.counterInCart += 1;
    this.addedInCart.push(product);
    this.saveInLocalStorage();
    this.cartService.$updateCartInfo.next({_id: product._id, price: product.price, counter: 1, isDeleted:false});
  }

  saveInLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(this.addedInCart));
  }

  increaseInCart(product:ProductModel){
    product.counterInCart += 1;
    this.updateCounterInCart(product);
    this.saveInLocalStorage();
    this.cartService.$updateCartInfo.next({_id: product._id, price: product.price, counter: 1, isDeleted:false});
  }

  updateCounterInCart(product:ProductModel){
    let foundIndex = this.addedInCart.findIndex(cartProduct=> cartProduct._id === product._id);
    if(product.counterInCart){
      this.addedInCart[foundIndex] = product;
    } else {
       this.addedInCart = this.addedInCart.filter(cartProduct => cartProduct._id != product._id );
    } 
  }

  decreaseInCart(product:ProductModel){
    product.counterInCart -= 1;
    this.updateCounterInCart(product);
    this.saveInLocalStorage();
    let isDeleted = product.counterInCart>0 ? false: true;
    this.cartService.$updateCartInfo.next({ _id: product._id, price: product.price, counter: -1, isDeleted: isDeleted});
  }

  deleteCartItem(product:ProductModel){
    let cartItemCounter = product.counterInCart;
    product.counterInCart = 0;
    this.updateCounterInCart(product);
    this.saveInLocalStorage();
    let isDeleted = true;
    this.cartService.$updateCartInfo.next({ _id: product._id, price: product.price, counter: cartItemCounter*(-1), isDeleted: isDeleted});
  }

  onClickPlaceOrder(){
    this.router.navigate(['checkout']).then((r) => r);
  }

  closeCartView(){
    this.productService.$cartViewChange.next(true);
  }
}
