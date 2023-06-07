import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.scss']
})
export class CategorySidebarComponent implements OnInit {
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
