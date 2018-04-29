import { Component, OnInit } from '@angular/core';
import { rotate } from '../animations';

@Component({
  selector: 'app-rotateimage',
  templateUrl: './rotateimage.component.html',
  styleUrls: ['./rotateimage.component.css'],
  animations: rotate
})
export class RotateimageComponent implements OnInit {
  state: String = 'default';

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }
  constructor() { }

  ngOnInit() {
  }

}
