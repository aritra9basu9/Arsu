import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer:FormGroup;

  constructor(private service:CustomerService, private builder:FormBuilder,private router:Router) { }

  ngOnInit(): void {

    this.customer = this.builder.group({
      id: new FormControl('',Validators.required),
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required), 
    })
  }
     get id()
     {
       return this.customer.get('id')
     }
     get firstName()
     {
       return this.customer.get('firstName')
     }
     get lastName()
     {
       return this.customer.get('lastName')
     }
     save()
     {
       if(this.customer.invalid)
       {
         this.customer.markAllAsTouched();
         return false;
       }
      this.service.save(this.customer)
      .subscribe(
        results =>{
          console.log(results);
          this.customer.reset();
          this.router.navigate(['']);//it will navigate to readAll
        }
      )
     }
}
