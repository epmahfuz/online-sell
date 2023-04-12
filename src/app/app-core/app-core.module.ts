import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignInModalComponent } from './components/sign-in-modal/sign-in-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    SearchBarComponent,
    SignInModalComponent,
  ], 
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  exports: [SearchBarComponent],
  entryComponents:[SignInModalComponent]
})
export class AppCoreModule { }
