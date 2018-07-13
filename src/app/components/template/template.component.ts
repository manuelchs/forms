import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form){
    border: 1px solid #FF8080;
  }
  `]
})
export class TemplateComponent {

  user: Object = {
    name: '',
    lastName: '',
    email: ''
  };

  constructor() { }

  guardar( myForm: NgForm ) {
    console.log('Formulario enviado');
    console.log(myForm);
    console.log(myForm.value);
    console.log(this.user);
  }

}
