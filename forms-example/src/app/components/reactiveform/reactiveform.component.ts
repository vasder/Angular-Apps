import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html'
})
export class ReactiveformComponent implements OnInit {

  constructor() { }
  submitted = false;
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    language: new FormControl('', Validators.required),
  });

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form Submitted ');
    if (this.form.valid) {
      console.log(this.form.value);
      this.submitted = true;
    }
  }


}
