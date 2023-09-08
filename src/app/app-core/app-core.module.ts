import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SignInModalComponent } from './components/sign-in-modal/sign-in-modal.component';
import { MaterialModule } from '../app-shared/material.module';
// import { MyAccountComponent } from './components/my-account/my-account.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    SignInModalComponent,
    // MyAccountComponent,
  ], 
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [SearchBarComponent],
  entryComponents:[SignInModalComponent]
})
export class AppCoreModule { }
