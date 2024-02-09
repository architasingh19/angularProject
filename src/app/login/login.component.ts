import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public loginsrcv:LoginService,private router:Router){

  }

  user : string = ''
  role : string= ''
submit() {
     this.loginsrcv.addTo(this.user,this.role)
     this.router.navigate([''])
}
}
