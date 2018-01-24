import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  form: FormGroup = new FormGroup({
    defaultLang: new FormControl('', Validators.required),
    displayName: new FormControl('', Validators.required),
    placeHolder: new FormControl('', Validators.required),
    sysTimeOut: new FormControl('', Validators.required),
    keepNotifications: new FormControl('', Validators.required),
    donotDisturb: new FormControl('', Validators.required),
    fromtime: new FormControl('', Validators.required),
    totime: new FormControl('', Validators.required)
  });

  onSubmit(form) {
    console.log('Form Submitted ');
    console.log(form.value);
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
