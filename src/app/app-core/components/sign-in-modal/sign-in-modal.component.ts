import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {SignUpService} from '../../services/sign-up.service'
import { AuthService } from '../../../app-shared/services/auth.service';
@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss']
})

export class SignInModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SignInModalComponent>,
    private signUpService: SignUpService,
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  hide: boolean = true;
  submitFor = 'signIn';
  changePosition = false;
  serverErrors: any = {};
  signInServerError: any = {};

  signInForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
    passwordSignIn: ['', [Validators.required]],
  });
  signUpForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
    email: ['', [Validators.email]],
    //password: ['', [Validators.required, Validators.minLength(8), this.passwordStrength()]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    image: [null],
  });

  ngOnInit(): void {
  }

  SubmitForSignIn(){
    if (this.signInForm.valid) {
      this.submitEM.emit(this.signInForm.value);
      const formData = new FormData();
      formData.append('username', this.signInForm.get('username').value);
      formData.append('passwordSignIn', this.signInForm.get('passwordSignIn').value);

      let payload = {
        'username':  this.signInForm.get('username').value,
        'password' : this.signInForm.get('passwordSignIn').value
      }

      this.signUpService.signIn(payload).subscribe(res=>{

        this.authService.doLoggedIn(res.access_token, res.loggedInUser);
        
        this.closeModal();
      }, (error:any)=>{
        this.serverErrors = error.error.errors;
          this.setServerErrors();
      });
    }
  }
  
  SubmitForSignUp(){
    if (this.signUpForm.valid) {
      this.submitEM.emit(this.signUpForm.value);

      const formData = new FormData();
      formData.append('email', this.signUpForm.get('email').value);
      formData.append('password', this.signUpForm.get('password').value);
      formData.append('mobile', this.signUpForm.get('mobile').value);
      formData.append('name', this.signUpForm.get('name').value);
      formData.append('image', this.signUpForm.get('image').value);
      
      this.signUpService.signUp(formData).subscribe(res=>{
        console.log("res: ", res);
        this.onClickSignIn();
        //this.closeModal();
      }, (error)=>{
        console.log("error: ", error.error.errors);
        if (error && error.error && error.error.errors) {
          this.serverErrors = error.error.errors;
          this.setServerErrors();
        }
      });
    }
  }
  private setServerErrors() {
    Object.keys(this.serverErrors).forEach(key => {
      const control = this.signUpForm.get(key);
      if (control) {
        control.setErrors({ 'serverError': this.serverErrors[key].msg });
      }
    });
  }

  passwordStrength(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password: string = control.value;
      const hasAlphabet = /[a-zA-Z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  
      const isValid = hasAlphabet && hasNumber && hasSymbol && password.length >= 8;
  
      return isValid ? null : { passwordStrength: true };
    };
  }

  changeButtonPositionSignIn(){
    if(!this.signInForm.valid){
      this.changePosition = this.changePosition === true ? false : true;
    }
  }
  changeButtonPositionSignUp(){
    if(!this.signUpForm.valid){
      this.changePosition = this.changePosition === true ? false : true;
    }
  }

  onClickSignIn(){
    this.submitFor = 'signIn';
    this.signInForm.patchValue({
      username: this.signUpForm.get('mobile').value
    });
  }
  onClickSignUp(){
    this.submitFor = 'signUp';

    this.signUpForm.patchValue({
      mobile: this.signInForm.get('username').value
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.signUpForm.get('image').setValue(file);
  }
  closeModal(){
    this.dialogRef.close(true);
  }

  get name() {
    return this.signUpForm.get('name');
  }
  get mobile() {
    return this.signUpForm.get('mobile');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }

  get username() {
    return this.signInForm.get('username');
  }
  get passwordSignIn() {
    return this.signInForm.get('passwordSignIn');
  }

  //No use segment
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();
}
