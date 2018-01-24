import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddressService } from '../../address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit {

  @Input() form: FormGroup;
  states: any = [];
  languages: any[] = [{
    code: 'EN',
    title: 'English'
  }, {
    code: 'SP',
    title: 'Spanish'
  }, {
    code: 'HN',
    title: 'Hindi'
  }];

  constructor(private service: AddressService) { }

  ngOnInit() {
    this.service.getStates()
      .subscribe(states => {
        console.log('states :' + states);
        this.states = states;
      });
  }

}
