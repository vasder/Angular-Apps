import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  uname = sessionStorage.Username;
  if(uname) {
    console.log('Active session exists');
  }
  constructor() { }

  ngOnInit() {

  }

}
