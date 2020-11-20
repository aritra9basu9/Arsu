import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusListComponent } from './Operations/bus-list/bus-list.component';
import { BusCreateComponent } from './Operations/bus-create/bus-create.component';
import { BusUpdateComponent } from './Operations/bus-update/bus-update.component';
import { BusDeleteComponent } from './Operations/bus-delete/bus-delete.component';


const routes: Routes = [
  { path:'',   redirectTo: '/buses', pathMatch: 'full' },
  {path:'buses', component:BusListComponent},
  {path:'addBus', component:BusCreateComponent},
  {path:'updateBus/:busId', component:BusUpdateComponent},
  {path:'deleteBus/:busId', component:BusDeleteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
