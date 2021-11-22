import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonarRegistrationComponent } from './donar-registration/donar-registration.component';
import { ViewDonarComponent } from './view-donar/view-donar.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'donarregistration', component: DonarRegistrationComponent }, 
{ path: 'viewdonar', component: ViewDonarComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
