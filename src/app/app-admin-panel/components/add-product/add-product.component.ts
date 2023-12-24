import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import {Location} from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @ViewChild('productInput') productInput!: ElementRef;
  @ViewChild('descriptionInput') descriptionInput!: ElementRef;
  @ViewChild('quantityInput') quantityInput!: ElementRef;
  @ViewChild('priceInput') priceInput!: ElementRef;

  categoryId:string;
  
  constructor(
    private route: ActivatedRoute,
    private categoryService : CategoryService,
    private location: Location,
    private fb: FormBuilder,
  ) { }

  imgUploading = false;
  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    quantity: [0, Validators.required],
    price: [0, Validators.required],
    image: [null, Validators.required] // Initialize the FormControl for the file
  });
  isSaving = false;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = params.id;
    });
  }
  onClickProductList(){
    this.location.back();
  }

  onClickAddProduct(){
    this.isSaving = true;
    const formData = new FormData();

    formData.append('name', this.form.get('name').value);
    formData.append('image', this.form.get('image').value);
    formData.append('description', this.form.get('description').value);
    formData.append('quantity', this.form.get('quantity').value);
    formData.append('price', this.form.get('price').value);
    formData.append('categoryId', this.categoryId);

    this.categoryService.addProduct(formData).subscribe(res => {
      console.log("A product created !: ", res);
      this.onClickProductList();
    });
  }
  onFileSelected(event: any) {
    this.imgUploading = true;
    const file: File = event.target.files[0];
    this.form.get('image').setValue(file);
    if (this.form.get('image').value === null) {
      console.log('Avatar is still null');
    } else {
      console.log('Avatar has a value');
      this.imgUploading = false;
    }
  }

  onClickAddProduct2(){
    const productName = this.productInput.nativeElement.value;
    const productDescription = this.descriptionInput.nativeElement.value;
    const productQuantity = this.quantityInput.nativeElement.value;
    const productPrice = this.priceInput.nativeElement.value;

    let productPayload = {
      categoryId: this.categoryId,
      name: productName,
      description:productDescription,
      quantity:productQuantity,
      price:productPrice
    };

    console.log(productPayload);

    this.categoryService.addProduct(productPayload).subscribe(res => {
      console.log("A product created !: ", res);
      this.onClickProductList();
    });
  }

}
