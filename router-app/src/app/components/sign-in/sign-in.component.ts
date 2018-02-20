import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) { }
  // model = new SignIn('', '');
  submitted = false;
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form Submitted ');
    if (this.form.valid) {
      console.log(this.form.value);
      this.submitted = true;
      sessionStorage.setItem('Username', this.form.value.username);
      this.router.navigate(['/home']);
    }
  }

}
