import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styles: []
})
export class ModalWindowComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) { }

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

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('Form Submitted ');
    console.log(form.value);
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  open(content) {
    this.modalService.open(content, {
      size: 'lg',
      windowClass: 'modal-xxl',
      backdrop: 'static',
      keyboard: false
    }).result.then((result) => {
      this.closeResult = 'Closed with: ${result}';
    }, (reason) => {
      this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
    });
  }

}
