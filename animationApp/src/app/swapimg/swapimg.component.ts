import { Component, OnInit } from '@angular/core';
import { fade } from '../animations';

@Component({
  selector: 'app-swapimg',
  templateUrl: './swapimg.component.html',
  animations: fade
})
export class SwapimgComponent implements OnInit {
  name = 'Vineeth';
  choice = 2;
  state = 'in';
  counter = 0;
  enableAnimation = false;
  imageSource = '';
  imgSrc1 = 'https://d18zm77o7qzu1y.cloudfront.net/uploads/files/000/007/927/original/USC70TOC321A021001.png?1488404400';
  imgSrc2 = 'https://i.pinimg.com/originals/7a/69/8d/7a698d21f90c5df74ddd2f0ee02b91a9.png';
  constructor() { }

  ngOnInit() {
    this.imageSource = this.imgSrc1;
  }

  onClick() {
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
  }

  toggleImg() {
    if (this.choice === 1) {
      this.imageSource = this.imgSrc1;
      this.choice = 2;
    } else {
      this.imageSource = this.imgSrc2;
      this.choice = 1;
    }
  }

  onDone($event) {
    if (this.enableAnimation) {
      if (this.counter === 1) {
        this.toggleImg();
      }
      this.toggleState();
    }
  }

  toggleState() {
    if (this.counter < 2) {
      this.state = this.state === 'in' ? 'out' : 'in';
      this.counter++;
    }
  }

}
