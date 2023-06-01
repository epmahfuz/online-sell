import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonService } from '../../../app-shared/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {
  isCartViewOn = false;
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
