import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-highlighted-category',
  templateUrl: './highlighted-category.component.html',
  styleUrls: ['./highlighted-category.component.scss']
})
export class HighlightedCategoryComponent implements OnInit{
    categoryList=[
        {
          id: "1",
          name:'Fresh Water Fish',
          iconLink: 'https://chaldn.com/_mpimage/meat-fish?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23737&q=low&v=1&m=400&webp=1',
        },
        {
          id: "2",
          name:'Prawns and SeaFood',
          iconLink: 'https://kolkatafish.com/wp-content/uploads/2022/02/category-sea-fish-prawn.jpg',
        },
        {
          id: "3",
          name:'Meat Mania',
          iconLink: 'https://kolkatafish.com/wp-content/uploads/2022/02/meat-mania-category.jpg',
        },
        {
          id: "4",
          name:'Fresh & Frozen',
          iconLink: 'https://kolkatafish.com/wp-content/uploads/2022/09/frozen-1.jpg',
        },
        {
          id: "5",
          name:'Fruits and Vegetables',
          iconLink: 'https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1',
        },
        {
          id: "6",
          name:'Meat & Fish',
          iconLink: 'https://chaldn.com/_mpimage/chicken-poultry?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D117422&q=low&v=1&m=400&webp=1',
        },
        {
          id: "7",
          name:'Health Products',
          iconLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT511fTNwkvGnQZGSoonJtqcEyUa5tY3NBjrg&usqp=CAU',
        },
        {
          id: "8",
          name:'Kitchen Appliances',
          iconLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEG_--lpDEd4EidyE5cISs7yE1Sn4feKosg&usqp=CAU',
        }
      ]; 
      selectedCatId = "all";
      constructor(
        private productService: ProductService
      ) { }
    
      ngOnInit(): void {}
      onClickCategory(catId){
        this.selectedCatId = catId;
        this.productService.$selectedCategoryId.next(catId);
      }
}
