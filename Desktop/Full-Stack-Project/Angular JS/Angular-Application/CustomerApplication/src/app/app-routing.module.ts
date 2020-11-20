import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadAllCustomerComponent } from './components/read-all-customer/read-all-customer.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ReadCustomerComponent } from './components/read-customer/read-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
// import { PatchCustomerComponent } from './components/patch-customer/patch-customer.component';


const routes: Routes = [
  {path: '',component: ReadAllCustomerComponent},
  {path: 'add', component: AddCustomerComponent},
  {path: 'read', component: ReadCustomerComponent},
  {path: 'update', component: UpdateCustomerComponent},
  {path: 'delete', component:DeleteCustomerComponent},
  //  {path: 'patch', component:PatchCustomerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
