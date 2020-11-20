import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-customer',
  templateUrl: './read-customer.component.html',
  styleUrls: ['./read-customer.component.css']
})
export class ReadCustomerComponent implements OnInit {
  customer;
  //to read input od recordId , we need activation rules
  constructor(private service:CustomerService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => {
       // console.log('id: ', params.recordId);
        var recordId = params.recordId;
        this.service.read(recordId).subscribe(
          results =>{
            this.customer = results;
          }
        )
      }
    )
  }

}
