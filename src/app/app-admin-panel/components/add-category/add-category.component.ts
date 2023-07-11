import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service'
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
  }

  onClickAddCategory(){
    console.log("I' m in onClickAddCategory");
    let categoryPayload ={
      name: 'Beef'
    }

    this.categoryService.addCategory(categoryPayload).subscribe(res => {
      console.log("A category created !: ", res);
    });
  }

}
