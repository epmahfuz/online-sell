import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../app-shared/services/cart.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
}) 
export class SearchBarComponent implements OnInit {
  cartItemCounter:number = 0;
  cartTotalPrice: number = 0;
  constructor(
    private cartService: CartService
  ) { }
 
  ngOnInit(): void {
    this.cartUpdateRealtime();
  }
  
  cartUpdateRealtime(){
    this.cartService.$updateMiniCart.subscribe((cartItem)=>{
     if(cartItem){
        this.cartTotalPrice += cartItem.price
        this.cartItemCounter += cartItem.counter
      }
    });
  }
}
