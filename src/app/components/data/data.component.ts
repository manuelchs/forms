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
      'name': new FormControl('', Validators.required ),
      'lastName': new FormControl('', Validators.required ),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] )
    });
  }

  sendForm() {
    console.log(this.myForm);
    console.log(this.myForm.value);
  }

}
