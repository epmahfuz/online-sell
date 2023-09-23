import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from '../../services/category.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  @ViewChild('categoryInput') categoryInput!: ElementRef;
  constructor(
    private router: Router,
    private categoryService : CategoryService,
    private fb: FormBuilder,
  ) { }

  imgUploading = false;
  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    avatar: [null, Validators.required] // Initialize the FormControl for the file
  });
  isSaving = false;
  ngOnInit(): void {
    
  }
  
  onClickAddCategory(){
    this.isSaving = true;
    const formData = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('avatar', this.form.get('avatar').value);

    this.categoryService.addCategory(formData).subscribe(res => {
      console.log("A category created !: ", res);
      
      setTimeout(() => {
        this.isSaving = false;
        this.goToCategoryList();
      }, 1000);
    });
  }

  onFileSelected(event: any) {
    this.imgUploading = true;
    const file: File = event.target.files[0];
    this.form.get('avatar').setValue(file);
    if (this.form.get('avatar').value === null) {
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
