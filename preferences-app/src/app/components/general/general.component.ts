import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  @Input() form: FormGroup;

  // form: FormGroup = new FormGroup({
  //   defaultLang: new FormControl('', Validators.required),
  //   displayName: new FormControl('', Validators.required),
  //   placeHolder: new FormControl('', Validators.required),
  //   sysTimeOut: new FormControl('', Validators.required)
  //   // keepNotifications: new FormControl('', Validators.required),
  //   // donotDisturb: new FormControl('', Validators.required),
  //   // fromtime: new FormControl('', Validators.required),
  //   // totime: new FormControl('', Validators.required)
  // });


  cosntructor(fb: FormBuilder) { }

  // onSubmit() {
  //   console.log('Form Submitted ');
  //   console.log(this.form.value);
  //   if (this.form.valid) {
  //     console.log(this.form.value);
  //   }
  // }
  ngOnInit() {
  }

}
