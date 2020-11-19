import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListComponent } from './list/list.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
   {path:'welcome', component:WelcomeComponent},
   {path:'list', component:ListComponent},
   {path:'**', component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
