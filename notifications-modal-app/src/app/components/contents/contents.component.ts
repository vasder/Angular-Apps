import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  constructor() { }

  // form: FormGroup = new FormGroup({
  //   defaultLang: new FormControl('', Validators.required),
  //   displayName: new FormControl('', Validators.required),
  //   placeHolder: new FormControl('', Validators.required),
  //   sysTimeOut: new FormControl('', Validators.required)
  // });

  ngOnInit() {
  }

  // onSubmit() {
  //   console.log('Form Submitted ');
  //   if (this.form.valid) {
  //     console.log(this.form.value);
  //   }
  // }

}
