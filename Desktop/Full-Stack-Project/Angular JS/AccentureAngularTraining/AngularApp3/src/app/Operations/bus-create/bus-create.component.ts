import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Bus } from 'src/app/Model/bus';
import { BusService } from 'src/app/Services/bus.service';

@Component({
  selector: 'app-bus-create',
  templateUrl: './bus-create.component.html',
  styleUrls: ['./bus-create.component.css']
})
export class BusCreateComponent implements OnInit {
  // buses: Observable<any>;
  bus:Bus;
  errorMessage:string;
  successMessage: string;
  
  constructor(private busService: BusService, private router: Router) {
  this.bus = new Bus(); 
  }

  ngOnInit() {
  }

  addBus(){
    this.busService.addBus(this.bus)
    .subscribe(
      (data)=>
      {console.log(data); 
        this.goToList();
      });
  }

  goToList() {
    this.router.navigate(['buses']);
  }


}

