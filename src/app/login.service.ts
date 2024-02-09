import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  isLoggedIn:boolean = false
   addTo(name:string,role:string):void{
    if(localStorage.getItem('auth')){
       this.isLoggedIn=true
    }
    else{
      localStorage.setItem('auth',JSON.stringify({name:name,role:role}))
      this.isLoggedIn=true
    }
   }
}
