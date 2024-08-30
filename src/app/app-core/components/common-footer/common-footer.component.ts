import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-footer',
  templateUrl: './common-footer.component.html',
  styleUrls: ['./common-footer.component.scss']
})
export class CommonFooterComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onClickTermsAndCondition(){
    this.router.navigate(['info/terms-and-condition']).then((r) => r);
  }

  onClickPrivacyPolicy(){
    this.router.navigate(['info/privacy-policy']).then((r) => r);
  }
  
}
