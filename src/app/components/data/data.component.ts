import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      'name': new FormControl('Manu'),
      'lastName': new FormControl(),
      'email': new FormControl()
    });
  }

  sendForm() {
    console.log(this.myForm);
    console.log(this.myForm.value);
  }

}
