import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MaterialModule } from '../app-shared/material.module';

const routes: Routes = [
  { path: 'profile', component: MyAccountComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class AppMySectionModule { }
