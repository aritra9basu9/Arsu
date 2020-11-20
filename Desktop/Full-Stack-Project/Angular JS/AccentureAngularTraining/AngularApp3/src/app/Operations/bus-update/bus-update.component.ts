import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from 'src/app/Model/bus';
import { BusService } from 'src/app/Services/bus.service';

@Component({
  selector: 'app-bus-update',
  templateUrl: './bus-update.component.html',
  styleUrls: ['./bus-update.component.css']
})
export class BusUpdateComponent implements OnInit {

  bus: Bus;
  busId: bigint;
  
  constructor(private busService: BusService, private route: ActivatedRoute,private router:Router) { 
    this.bus =new Bus();
  }

  ngOnInit() {
    this.bus = new Bus();
     this.route.params.subscribe(params => this.busId = params['busId']);
     this.busService.getBusBYbusId(this.busId)
     .subscribe(data=>{
       console.log(data),
       this.bus=data;
      },
     error => console.log(error));

  }

  updateBus(){
    this.busService.updateBus(this.busId, this.bus)
    .subscribe(data=>{console.log(data), this.goToList(), 
      error => console.log(error)});
    //alert("Details have been updated succcessfully!!")
  }

  onSubmit(){
    this.updateBus();
  }

  goToList() {
    this.router.navigate(['buses']);
  }

}

