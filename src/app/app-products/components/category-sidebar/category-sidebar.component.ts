import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Category } from '../../../../app/app-shared/models/all-models';

@Component({
  selector: 'app-category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.scss']
})
export class CategorySidebarComponent implements OnInit {
  categoryList:Category[];
  categoryList2:Category[]=[
    {
      _id: "all",
      name:'All Category',
      image: '',
    },
    {
      _id: "1",
      name:'Fresh Water Fish',
      image: 'https://chaldn.com/_mpimage/meat-fish?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23737&q=low&v=1&m=400&webp=1',
    },
    {
      _id: "2",
      name:'Prawns and SeaFood',
      image: 'https://kolkatafish.com/wp-content/uploads/2022/02/category-sea-fish-prawn.jpg',
    },
    {
      _id: "3",
      name:'Meat Mania',
      image: 'https://kolkatafish.com/wp-content/uploads/2022/02/meat-mania-category.jpg',
    },
    {
      _id: "4",
      name:'Fresh & Frozen',
      image: 'https://kolkatafish.com/wp-content/uploads/2022/09/frozen-1.jpg',
    }
  ];
  selectedCatId = "all";
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }
  onClickCategory(catId, catName){
    this.selectedCatId = catId;
    const categoryKeyValuePair = { key: catId, value: catName };
    this.productService.$selectedCategoryId.next(categoryKeyValuePair);
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
      },
      (error) => {
        // Handle error
        console.error(error);
      }
    );
  }
}
