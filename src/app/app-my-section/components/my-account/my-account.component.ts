import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../app-products/services/product.service';
import { CommonService } from '../../../app-shared/services/common.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})

export class MyAccountComponent implements OnInit {

  isCartViewOn = true;
  showCategorySidebar = true;
  constructor(
    private productService: ProductService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.cartViewChangeDetect();
    this.categorySidebarChange();
  }

  categorySidebarChange(){
    this.commonService.$showCategorySidebar.subscribe(isOpenSidebar=>{
      this.showCategorySidebar = this.showCategorySidebar ? false : true;
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
