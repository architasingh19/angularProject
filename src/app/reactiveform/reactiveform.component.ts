import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {
  signup: FormGroup = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    }),
   
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      district: new FormControl(''),
    })
  })
  signing(){
    console.log(this.signup.value)
      
  }
}
