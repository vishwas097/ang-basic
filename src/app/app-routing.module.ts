import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent} from '../app/register/register.component';
import { DashboardComponent} from '../app/dashboard/dashboard.component';

const routes: Routes = [
{
  path : '' , component : LoginComponent
},

  {
  path : 'login' , component : LoginComponent
},
{
  path : 'register', component : RegisterComponent
},
{
  path : 'dashboard', component : DashboardComponent
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
