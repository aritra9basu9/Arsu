import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusCreateComponent } from './Operations/bus-create/bus-create.component';
import { BusDeleteComponent } from './Operations/bus-delete/bus-delete.component';
import { BusUpdateComponent } from './Operations/bus-update/bus-update.component';
import { BusListComponent } from './Operations/bus-list/bus-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BusCreateComponent,
    BusDeleteComponent,
    BusUpdateComponent,
    BusListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
