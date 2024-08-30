import { NgModule } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SignInModalComponent } from './components/sign-in-modal/sign-in-modal.component';
import { MaterialModule } from '../app-material/material.module';
// import { MyAccountComponent } from './components/my-account/my-account.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NguCarouselModule } from '@ngu/carousel';
import { TopCarouselComponent } from './components/top-carousel/top-carousel.component';
import { CommonFooterComponent } from './components/common-footer/common-footer.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    SearchBarComponent,
    SignInModalComponent,
    TopCarouselComponent,
    CommonFooterComponent,
    // MyAccountComponent,
  ], 
  imports: [
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NguCarouselModule,
  ],
  exports: [SearchBarComponent, TopCarouselComponent, CommonFooterComponent],
  entryComponents:[SignInModalComponent]
})
export class AppCoreModule { }
