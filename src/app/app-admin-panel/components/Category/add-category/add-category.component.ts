import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { CategoryService } from '../../../services/category.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  @Input() public IsEditCategory:any = false;
  @Input() public CategoryId:any = "";
  @ViewChild('categoryInput') categoryInput!: ElementRef;
  constructor(
    private router: Router,
    private categoryService : CategoryService,
    private fb: FormBuilder,
  ) { }

  imgUploading = false;

  imgUploaded = false;
  imgUrl = '';
  patchImgChanged = false;

  addCategoryForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    image: [null, Validators.required] // Initialize the FormControl for the file
  });
  isSaving = false;

  ngOnInit(): void {
    if(this.IsEditCategory){
      console.log("IsEditCategory: ", this.IsEditCategory);
      this.categoryService.getACategory(this.CategoryId).subscribe(res =>{
        console.log("res: ", res[0]);
        this.patchCategoryInfo(res[0]);
      });
    }
  }

  patchCategoryInfo(prefilledData){
    this.addCategoryForm.controls['name'].setValue(prefilledData.name);
    this.addCategoryForm.controls['image'].setValue(prefilledData.image);
    this.imgUploaded = true;
    console.log("this.imgUploaded: ", this.imgUploaded);
    this.imgUrl = prefilledData.image;
  }

  removeSelectedFile(){
    this.patchImgChanged = true;
    this.imgUploaded = false;
    this.imgUrl = '';
    this.addCategoryForm.controls['image'].setValue(null);
  }
  onClickSave(){
    this.isSaving = true;
    if(this.IsEditCategory){
      this.updateCategory();
    } else {
      this.addCategory();
    }
  }

  addCategory(){
    const formData = new FormData();
    formData.append('name', this.addCategoryForm.get('name').value);
    formData.append('image', this.addCategoryForm.get('image').value);

    this.categoryService.addCategory(formData).subscribe(res => {
      console.log("A category created !: ", res);
      this.goToCategoryList();
    }, (error=>{
      this.isSaving = false;
      console.log(error);
    }));
  }

  updateCategory(){
    const formData = new FormData();
    formData.append('name', this.addCategoryForm.get('name').value);
    if(this.patchImgChanged == true){
      formData.append('image', this.addCategoryForm.get('image').value);
    }

    this.categoryService.updateACategory(formData, this.CategoryId).subscribe(res => {
      console.log("A category update !: ", res);
      this.goToCategoryList();
    }, (error=>{
      this.isSaving = false;
      console.log(error);
    }));
  }

  onFileSelected(event: any) {
    this.imgUploading = true;
    const file: File = event.target.files[0];
    this.addCategoryForm.get('image').setValue(file);
    if (this.addCategoryForm.get('image').value === null) {
      console.log('Avatar is still null');
    } else {
      console.log('Avatar has a value');
      this.imgUploading = false;
    }
  }

  goToCategoryList(){
    this.router.navigate(['admin-panel']).then((r) => r);
  }
}
