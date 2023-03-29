import { Component, OnInit } from '@angular/core';
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
  ]
  alreadyInCartItems: ProductModel[] = [];
  addInCart: ProductModel[] = [];
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {

  }

  alreadyInCart(){
    
  }

  updateCartInfo(){
    localStorage.setItem('cart', JSON.stringify(this.addInCart));
  }

  addToCart(product){
    product.counterInCart += 1;
    this.addInCart.push(product)
    this.cartService.$updateMiniCart.next({price: product.price, counter: 1});
    this.updateCartInfo();
  }

  increaseInCart(product){

  }

  decreaseInCart(product){

  }

}

export interface ProductModel {
  id: string,
  name: string, 
  price: number,
  quantity: number,
  imgLink:string,
  counterInCart: number
}
