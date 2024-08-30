import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../app-shared/models/all-models';
import { CartService } from '../../../app-shared/services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: ProductModel[];
  productListShow: ProductModel[];
  addedInCart: ProductModel[] = [];
  selectedCategoryName = "All Products";
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.cartUpdateRealtime();
    this.categoryProductList("all");
    this.onChangeSelectedCategory();
    
  }
  categoryProductList(categoryId){
    if(categoryId=='all'){
      this.getAllProduct();
    } else {
      this.getProductsByCategoryId(categoryId);
    }
    console.log("Product List: ", this.productListShow);
  }
  getAllProduct(){
    this.productService.getAllProduct().subscribe(
      (products: any) => {
        this.productList = products.Data;
        this.productListShow = products.Data;
        this.patchCartInfo();
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getProductsByCategoryId(categoryId:string) {
    this.productService.getProductByCategoryId(categoryId).subscribe(
      (products: any) => {
        this.productListShow = products.Data;
        this.productList = products.Data;
        this.patchCartInfo();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onChangeSelectedCategory(){
    this.productService.$selectedCategoryId.subscribe(({key, value})=>{
      this.selectedCategoryName = value;
      this.categoryProductList(key);
    });
  }

  cartUpdateRealtime() {
    this.cartService.$updateCartInfo.subscribe((cartItem) => {
      if (cartItem) {
        if(cartItem.isDeleted){
          let foundIndex = this.productList.findIndex(product=> product._id === cartItem._id);
          this.productList[foundIndex].counterInCart = 0;
        }
        this.patchCartInfo();
      }
    });
  }

  patchCartInfo(){
    this.addedInCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    this.addedInCart.forEach((cartProduct:ProductModel) => {
      let foundIndex = this.productList.findIndex(product=> product._id === cartProduct._id);
      this.productList[foundIndex] = cartProduct;
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
    this.cartService.$updateCartInfo.next({ _id: product._id, price: product.price, counter: -1, isDeleted: false});
  }
}
