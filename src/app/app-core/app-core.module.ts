import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SignInModalComponent } from './components/sign-in-modal/sign-in-modal.component';
import { MaterialModule } from '../app-shared/material.module';
// import { MyAccountComponent } from './components/my-account/my-account.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    SearchBarComponent,
    SignInModalComponent,
    // MyAccountComponent,
  ], 
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [SearchBarComponent],
  entryComponents:[SignInModalComponent]
})
export class AppCoreModule { }
