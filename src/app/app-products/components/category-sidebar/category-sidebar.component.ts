import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Category } from '../../../../app/app-shared/models/all-models';
import { Router } from '@angular/router';
import { CommonService } from '../../../app-shared/services/common.service';

@Component({
  selector: 'app-category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.scss']
})
export class CategorySidebarComponent implements OnInit {
  categoryList:Category[];
  selectedCatId = "all";
  constructor(
    private productService: ProductService,
    private commmonService: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
  }
  
  getAllCategories() {
    this.productService.getAllCategory().subscribe(
      (response:any) => {
        this.categoryList = response.Data;
        this.categoryList.unshift({
          _id: "all",
          name:'All Category',
          image: '',
        });
        this.setSelectedCategory();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  setSelectedCategory(){
    let selectedCatId = localStorage.getItem('selectedCatId') || 'all';
    let selectedCatName = localStorage.getItem('selectedCatName') || 'All Products';
    this.sowSelectedCategory(selectedCatId, selectedCatName);
  }

  sowSelectedCategory(selectedCatId:string, selectedCatName:string){
    this.selectedCatId = selectedCatId;
    const categoryKeyValuePair = { key: selectedCatId, value: selectedCatName };
    this.productService.$selectedCategoryId.next(categoryKeyValuePair);
  }

  onClickCategory(selectedCatId, selectedCatName){
    localStorage.setItem('selectedCatId', selectedCatId);
    localStorage.setItem('selectedCatName', selectedCatName);

    this.keepOpneOrCloseSidebar();

    this.decideToRedirect(selectedCatId, selectedCatName);
  }

  keepOpneOrCloseSidebar(){
    if (window.innerWidth <= 765) {
      this.setShowCategorySidebar();
      
      this.commmonService.$showCategorySidebar.next(false);
    }
  }

  setShowCategorySidebar(){
    localStorage.setItem('showCategorySidebar', "false");
  }

  decideToRedirect(selectedCatId:string, selectedCatName:string){
    if(this.router.url.includes('checkout')){
      this.router.navigate(['']).then((r) => r);
    } else{
      this.sowSelectedCategory(selectedCatId, selectedCatName);
    }
  }

  goToHomePage(){
    if(this.router.url.includes('checkout')){
      this.router.navigate(['']).then((r) => r);
    }
  }
}
