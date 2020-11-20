import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  customer;
  //to read input od recordId , we need activation rules
  constructor(private service:CustomerService, 
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => {
       // console.log('id: ', params.recordId);
        var recordId = params.recordId;
        this.service.delete(recordId).subscribe(
          results =>{
            console.log(results);
            this.router.navigate(['']);//we are redirecting back to all customers
            //we dont have to write any code in the delete html file as we are not printing the same
            
          }
        )
      }
    )
  }

}
