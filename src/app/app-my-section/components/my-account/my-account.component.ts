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
  showCategorySidebar:Boolean;
  constructor(
    private productService: ProductService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.cartViewChangeDetect();
    this.categorySidebarChange();
  }

  categorySidebarChange(){
    if(localStorage.getItem('showCategorySidebar') == 'false'){
      this.showCategorySidebar = false;
    } else {
      this.showCategorySidebar = true;
    }

    this.commonService.$showCategorySidebar.subscribe(isOpenSidebar=>{
      this.showCategorySidebar = isOpenSidebar;
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
