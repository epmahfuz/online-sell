import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss']
})
export class SignInModalComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<SignInModalComponent>,
  ) { }

  submitFor = 'signIn';
  changePosition = false;
  isValid = false;

  ngOnInit(): void {
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
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
