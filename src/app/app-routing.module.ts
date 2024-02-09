import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component'
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[authGuard]
  },
  {
    path:'about',
    component:AboutComponent,
    canActivate:[authGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'reactive', 
    component:ReactiveformComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
