import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonService } from '../../../app-shared/services/common.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  isCartViewOn = true;
  categorySidebar = true;
  constructor(
    private productService: ProductService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.cartViewChangeDetect();
    this.categorySidebarChange();
  }

  categorySidebarChange(){
    this.commonService.$categorySidebar.subscribe(isOpenSidebar=>{
      this.categorySidebar = this.categorySidebar ? false : true;
    })
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
