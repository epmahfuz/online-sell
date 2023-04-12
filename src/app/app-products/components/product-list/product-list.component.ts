import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../app-shared/models/all-models';
import { CartService } from '../../../app-shared/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: ProductModel[] = [
    {
      id:'1',
      name: 'Premium Rui Fish Headless',
      quantity: 3,
      price: 10,
      imgLink: 'https://chaldn.com/_mpimage/premium-rui-fish-headless-curry-cut-7-11-pcs-30-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127448&q=best&v=1&m=400&webp=1',
      counterInCart: 0
    },
    {
      id:'2',
      name: 'Premium Rui Fish Headless Curry Cut (7-11 pcs) ±30 gm',
      quantity: 2,
      price: 120,
      imgLink: 'https://chaldn.com/_mpimage/premium-rui-fish-headless-curry-cut-7-11-pcs-30-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127448&q=best&v=1&m=400&webp=1',
      counterInCart: 0
    }
  ];
  addedInCart: ProductModel[] = [];
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.patchCartInfo();
    this.cartUpdateRealtime();
  }

  cartUpdateRealtime() {
    this.cartService.$updateCartInfo.subscribe((cartItem) => {
      if (cartItem) {
        if(cartItem.isDeleted){
          let foundIndex = this.productList.findIndex(product=> product.id === cartItem.id);
          this.productList[foundIndex].counterInCart = 0;
        }
        this.patchCartInfo();
      }
    });
  }

  patchCartInfo(){
    this.addedInCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    this.addedInCart.forEach((cartProduct:ProductModel) => {
      let foundIndex = this.productList.findIndex(product=> product.id === cartProduct.id);
      this.productList[foundIndex] = cartProduct;
    });
  }

  addToCart(product:ProductModel){
    product.counterInCart += 1;
    this.addedInCart.push(product);
    this.saveInLocalStorage();
    this.cartService.$updateCartInfo.next({id: product.id, price: product.price, counter: 1, isDeleted:false});
  }

  saveInLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(this.addedInCart));
  }
  
  increaseInCart(product:ProductModel){
    product.counterInCart += 1;
    this.updateCounterInCart(product);
    this.saveInLocalStorage();
    this.cartService.$updateCartInfo.next({id: product.id, price: product.price, counter: 1, isDeleted:false});
  }

  updateCounterInCart(product:ProductModel){
    let foundIndex = this.addedInCart.findIndex(cartProduct=> cartProduct.id === product.id);
    if(product.counterInCart){
      this.addedInCart[foundIndex] = product;
    } else {
       this.addedInCart = this.addedInCart.filter(cartProduct => cartProduct.id != product.id );
    } 
  }

  decreaseInCart(product:ProductModel){
    product.counterInCart -= 1;
    this.updateCounterInCart(product);
    this.saveInLocalStorage();
    this.cartService.$updateCartInfo.next({ id: product.id, price: product.price, counter: -1, isDeleted: false});
  }
}
