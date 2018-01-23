import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  // form: FormGroup = new FormGroup({
  //   defaultLang: new FormControl('', Validators.required),
  //   displayName: new FormControl('', Validators.required),
  //   placeHolder: new FormControl('', Validators.required),
  //   sysTimeOut: new FormControl('', Validators.required)
  // });

  // onSubmit() {
  //   console.log('Form Submitted ');
  //   if (this.form.valid) {
  //     console.log(this.form.value);
  //   }
  // }

}
