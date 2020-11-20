import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customer : FormGroup
  constructor(private service:CustomerService, 
              private activatedRoute:ActivatedRoute, 
              private formBuilder: FormBuilder,
              private router:Router) { }

  ngOnInit(): void {
    this.customer = this.formBuilder.group({
     id: new FormControl('',Validators.required),
     firstName: new FormControl('',Validators.required),
     lastName:new FormControl('',Validators.required),

    });
    this.activatedRoute.queryParams.subscribe(
      params => {
      //  console.log('id: ', params.recordId);
        var recordId = params.recordId;
        this.service.read(recordId).subscribe(
          results =>{
          //  console.log(results);
            this.customer.patchValue(results);
          }
        )
      }
    );
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
  update()
  {
    if(this.customer.invalid)
       {
         this.customer.markAllAsTouched();
         return false;
       }
      this.service.update(this.customer).subscribe(
        results =>{
          console.log(results);
          this.customer.reset();
          this.router.navigate(['']);//it will navigate to readAll
        }
      );
  }
}