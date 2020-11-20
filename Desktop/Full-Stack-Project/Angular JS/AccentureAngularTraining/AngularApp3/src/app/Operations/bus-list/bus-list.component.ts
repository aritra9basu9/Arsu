import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Bus } from 'src/app/Model/bus';
import { BusService } from 'src/app/Services/bus.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  buses: Observable<Bus[]>;
 
  constructor(private busService: BusService,private router: Router ) {
  }

  ngOnInit() {
    this. getListOfbuses();
  }

  getListOfbuses() {
    console.log(this.busService.getListOfBuses());
    this.busService.getListOfBuses().subscribe(
      (data) =>this.buses = data,
      error=>
      {
        alert("Data not available..We are working on it!!");
      });
  }

  updateBus(busId: bigint){
    /* console.log(busId); */
    this.router.navigate(['updateBus',busId]);
  }

  deleteBus(busId:bigint){
    this.router.navigate(['deleteBus',busId]);
  }

}
