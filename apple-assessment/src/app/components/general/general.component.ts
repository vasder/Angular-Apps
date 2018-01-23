import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  @Input() form: FormGroup;
  private genderList: string[];
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

  cosntructor(fb: FormBuilder) { }

  ngOnInit() {
    this.genderList = ['Male', 'Female', 'Others'];
  }

}
