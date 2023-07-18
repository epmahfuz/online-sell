import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignInModalComponent } from './components/sign-in-modal/sign-in-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MyAccountComponent } from './components/my-account/my-account.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    SignInModalComponent,
    MyAccountComponent,
  ], 
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [SearchBarComponent],
  entryComponents:[SignInModalComponent]
})
export class AppCoreModule { }
