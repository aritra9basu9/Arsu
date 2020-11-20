import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { ReadAllCustomerComponent } from './components/read-all-customer/read-all-customer.component';
import { ReadCustomerComponent } from './components/read-customer/read-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { CustomerService } from './service/customer.service';
// import { PatchCustomerComponent } from './components/patch-customer/patch-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    ReadAllCustomerComponent,
    ReadCustomerComponent,
    DeleteCustomerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
