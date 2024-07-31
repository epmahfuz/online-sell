import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-top-carousel',
  templateUrl: './top-carousel.component.html',
  styleUrls: ['./top-carousel.component.scss']
})
export class TopCarouselComponent implements OnInit, AfterViewInit{ 
  @ViewChild('myCarousel', { static: false }) myCarousel;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    //load: 3,
    interval: { timing: 4000, initialDelay: 500 },
    loop: true,
    touch: true,
    velocity: 0.1,
    point: {
      visible: true,
      hideOnSingleSlide: true
    }
  }
  allDiscount = [
    {name: 'one', price:'2.3', img:'../../../../assets/images/BG/1.jpeg'},
    {name: 'two', price:'3.3', img: '../../../../assets/images/BG/2.jpeg'},
    {name: 'three', price:'4.3', img:'../../../../assets/images/BG/1.jpeg'},
    {name: 'four', price:'5.3', img: '../../../../assets/images/BG/2.jpeg'},
  ]

  constructor(
    private cdr: ChangeDetectorRef
  ) {}
  
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
  }

}
