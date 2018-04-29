import { Component, OnInit } from '@angular/core';
import { move } from '../animations';

@Component({
  selector: 'app-moveimage',
  templateUrl: './moveimage.component.html',
  styleUrls: ['./moveimage.component.css'],
  animations: move
})
export class MoveimageComponent implements OnInit {
  state = 'topRight';
  timeOutRef;
  constructor() { }

  ngOnInit() {
  }

  moveCat() {
    this.state = this.state === 'topRight' ? 'bottomLeft' : 'topRight';
  }

}


