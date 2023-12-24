import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {SignUpService} from '../../services/sign-up.service'
@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss']
})
export class SignInModalComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<SignInModalComponent>,
    private signUpService: SignUpService,
    private fb: FormBuilder,
  ) { }

  submitFor = 'signIn';
  changePosition = false;
  isValid = true;
  form: FormGroup = this.fb.group({
    email: [''],
    password: [''],
    mobile: [''],
    name: [''],
    image: [null] // Initialize the FormControl for the file
  });

  ngOnInit(): void {
  }

  SubmitForSignIn(){
    const formData = new FormData();
    formData.append('username', this.form.get('email').value);
    formData.append('password', this.form.get('password').value);

    let payload = {
      'username':  this.form.get('email').value,
      'password' : this.form.get('password').value
    }

    this.signUpService.logIn(payload).subscribe(res=>{
      console.log("res: ", res);
    });
  }
  
  SubmitForSignUp(){
    const formData = new FormData();
    formData.append('email', this.form.get('email').value);
    formData.append('password', this.form.get('password').value);
    formData.append('mobile', this.form.get('mobile').value);
    formData.append('name', this.form.get('name').value);
    formData.append('image', this.form.get('image').value);
    
    this.signUpService.addAnonymousUser(formData).subscribe(res=>{
      console.log("res: ", res);
    });
  }

  // less important segment
  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
    if(this.submitFor == 'signUp'){
      this.SubmitForSignUp();
    } else {
      this.SubmitForSignIn()
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.form.get('image').setValue(file);
  }

  closeModal(){
    this.dialogRef.close(true);
  }
  sign_in(){
    this.submitFor = 'signIn';
  }
  sign_up(){
    this.submitFor = 'signUp';
  }
  changeButtonPosition(){
    if(this.isValid == false){
      this.changePosition = this.changePosition === true ? false : true;
    }
  }

  //No use segment
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();
}
