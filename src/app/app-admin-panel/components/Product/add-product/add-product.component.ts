import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import {Location} from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @Input() public isEditMode:any = false;
  @Input() public productId:any = "";
  
  imgUploaded = false;
  imgUrl = '';
  patchImgChanged = false;

  categoryId:string;
  
  constructor(
    private route: ActivatedRoute,
    private categoryService : CategoryService,
    private location: Location,
    private fb: FormBuilder,
  ) { }

  imgUploading = false;
  addProductForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    quantityType: ['pcs', Validators.required],
    quantity: [null, Validators.required],
    price: [null, Validators.required],
    image: [null, Validators.required] // Initialize the FormControl for the file
  });
  isSaving = false;

  ngOnInit(): void {
    if(this.isEditMode){
      this.categoryService.getAProduct(this.productId).subscribe( res=>{
        console.log('res: ', res[0]);
        this.patchProductInfo(res[0]);
      });
    } else{
      this.route.params.subscribe((params) => {
        this.categoryId = params.id;
      });
    }
  }

  patchProductInfo(prefilledData){
    this.addProductForm.controls['name'].setValue(prefilledData.name);
    this.addProductForm.controls['image'].setValue(prefilledData.image);
    this.addProductForm.controls['description'].setValue(prefilledData.description);
    this.addProductForm.controls['quantityType'].setValue(prefilledData.quantityType);
    this.addProductForm.controls['quantity'].setValue(prefilledData.quantity);
    this.addProductForm.controls['price'].setValue(prefilledData.price);

    this.imgUploaded = true;
    this.imgUrl = prefilledData.image;
    this.categoryId = prefilledData.categoryId;
  }

  onClickProductList(){
    this.location.back();
  }
  
  onClickSave(){
    if(this.isEditMode){
      this.updateProduct();
    } else{
      this.addProduct();
    }
  }

  addProduct(){
    this.isSaving = true;
    const formData = new FormData();

    formData.append('name', this.addProductForm.get('name').value);
    formData.append('image', this.addProductForm.get('image').value);
    formData.append('description', this.addProductForm.get('description').value);
    formData.append('quantityType', this.addProductForm.get('quantityType').value);
    formData.append('quantity', this.addProductForm.get('quantity').value);
    formData.append('price', this.addProductForm.get('price').value);
    formData.append('categoryId', this.categoryId);
    formData.append('counterInCart', "0");
    
    this.categoryService.addProduct(formData).subscribe(res => {
      console.log("A product created !: ", res);
      this.onClickProductList();
    });
  }

  updateProduct(){
    this.isSaving = true;
    const formData = new FormData();

    formData.append('name', this.addProductForm.get('name').value);
    formData.append('description', this.addProductForm.get('description').value);
    formData.append('quantityType', this.addProductForm.get('quantityType').value);
    formData.append('quantity', this.addProductForm.get('quantity').value);
    formData.append('price', this.addProductForm.get('price').value);
    formData.append('categoryId', this.categoryId);

    formData.append('counterInCart', "0");
    formData.append('isActive', "true");
    formData.append('isArchived', "false");

    if(this.patchImgChanged == true){
      formData.append('image', this.addProductForm.get('image').value);
    }

    this.categoryService.updateAProduct(formData, this.productId).subscribe(res => {
      this.onClickProductList();
    },
    (error)=>{
      console.log(error);
    });
  }

  onFileSelected(event: any) {
    this.imgUploading = true;
    const file: File = event.target.files[0];
    this.addProductForm.get('image').setValue(file);
    if (this.addProductForm.get('image').value === null) {
      console.log('Avatar is still null');
    } else {
      console.log('Avatar has a value');
      this.imgUploading = false;
    }
  }

  removeSelectedFile(){
    this.patchImgChanged = true;
    this.imgUploaded = false;
    this.imgUrl = '';
    this.addProductForm.controls['image'].setValue(null);
  }
}
