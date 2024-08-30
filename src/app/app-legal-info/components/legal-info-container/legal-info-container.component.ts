import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../../app-products/services/product.service';
import { CommonService } from '../../../app-shared/services/common.service';

@Component({
  selector: 'app-legal-info-container',
  templateUrl: './legal-info-container.component.html',
  styleUrls: ['./legal-info-container.component.scss']
})
export class LegalInfoContainerComponent implements OnInit {
  @Input() pageName: string ="33"; 
  @ViewChild('scrollContainer') scrollContainer: ElementRef;
  @ViewChild('topCarousel') topCarousel: ElementRef;

  isCartViewOn = false;
  showCategorySidebar:boolean;
  constructor(
    private productService: ProductService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.cartViewChangeDetect();
    this.categorySidebarChange();
  }
  // my-component.component.ts

  ngAfterViewInit() {
    console.log(this.topCarousel.nativeElement); // Check if topCarousel is defined
  } 
// just call this function to scroll at top
  scrollTo100px() {
    const container = this.scrollContainer.nativeElement;
    const topCarouselHeight = this.topCarousel.nativeElement.clientHeight;
    container.scrollTop += topCarouselHeight;
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
