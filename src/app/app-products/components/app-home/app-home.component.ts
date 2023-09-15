import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonService } from '../../../app-shared/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit, AfterViewInit{
  @ViewChild('scrollContainer') scrollContainer: ElementRef;
  @ViewChild('topCarousel') topCarousel: ElementRef;

  isCartViewOn = false;
  showCategorySidebar = true;
  constructor(
    private productService: ProductService,
    private commonService: CommonService
  ) { }

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
