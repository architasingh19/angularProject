import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
constructor(public apiserv:ApiService){}

userInfo: any=null
getApiData(){
  let subsApi= this.apiserv.getApi().subscribe({
    next: (res)=>{
   
      console.log(res.results[0].name);
      this.userInfo=res.results[0]
    },
    error:(err)=>{
     console.log(err);
    }
  })
}
}

