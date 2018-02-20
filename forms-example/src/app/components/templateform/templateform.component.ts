import { Component, OnInit } from '@angular/core';
import { Students } from '../../students';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html'
})
export class TemplateformComponent implements OnInit {

  insurances = ['Aetna', 'United HealthCare', 'Anthem', 'Cigna'];
  model = new Students('Vineeth', 'X', 'Male', 'Aetna');
  constructor() { }

  submitted = false;
  ngOnInit() {
  }

  onSubmit() {
    if (this.model) {
      console.log(this.model);
      this.submitted = true;
    }
  }

}
