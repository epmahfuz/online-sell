import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from '../../services/category.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  @ViewChild('categoryInput') categoryInput!: ElementRef;
  constructor(
    private router: Router,
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
  }

  onClickAdminPanel(){
    this.router.navigate(['admin-panel']).then((r) => r);
  }

  onClickAddCategory(){
    const categoryName = this.categoryInput.nativeElement.value;
    // console.log("Category Name:", categoryName);

    let categoryPayload = {
      categoryId: '64b222db9dbb9f23cc4fb0c3',
      name: categoryName
    };

    this.categoryService.addCategory(categoryPayload).subscribe(res => {
      console.log("A category created !: ", res);
    });

    this.router.navigate(['admin-panel']).then((r) => r);


  }

}
