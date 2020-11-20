import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-all-customer',
  templateUrl: './read-all-customer.component.html',
  styleUrls: ['./read-all-customer.component.css']
})
export class ReadAllCustomerComponent implements OnInit {
   
  customers= [];
  constructor(private service:CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.service.readAll().subscribe(

      results=>{
        this.customers =results;
      }
    )
  }
  //it has to make a call to other components
  read(id){
    this.router.navigate(['read'],{ queryParams: {recordId:id}});
  }
  readForUpdate(id)
  {
    this.router.navigate(['update'],{ queryParams: {recordId:id}});
  }

  delete(id)
  {
    this.router.navigate(['delete'],{ queryParams: {recordId:id}});
  
  }
}
