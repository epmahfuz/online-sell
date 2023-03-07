import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    SearchBarComponent,
  ], 
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule 
  ],
  exports: [SearchBarComponent],
})
export class AppCoreModule { }
