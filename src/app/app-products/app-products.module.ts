import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { RouterModule, Routes } from '@angular/router';
import {AppCoreModule} from '../app-core/app-core.module';
import { CategorySidebarComponent } from './components/category-sidebar/category-sidebar.component'; 
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
const routes: Routes = [
  { path: '', component: AppHomeComponent },
]

@NgModule({
  declarations: [
    AppHomeComponent,
    CategorySidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    FlexLayoutModule,
    AppCoreModule
  ]
})
export class AppProductsModule { }
