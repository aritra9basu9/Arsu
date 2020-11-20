import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from 'src/app/Services/bus.service';

@Component({
  selector: 'app-bus-delete',
  templateUrl: './bus-delete.component.html',
  styleUrls: ['./bus-delete.component.css']
})
export class BusDeleteComponent implements OnInit {

  busId : bigint;
  successMessage:string;
  errorMessage:string;

  constructor(private route:ActivatedRoute,
    private router:Router, 
    private busService: BusService) { 

  }

  ngOnInit() {
     this.route.params.subscribe(params => this.busId = params['busId']);
     this.busService.getBusBYbusId(this.busId).subscribe(
       data=>{
         console.log(data)}, 
         error => console.log(error)); 
  }

  deleteBus(){
    /* console.log(this.busId); */
    this.busService.deleteBus(this.busId).subscribe(
      data=>{
        this.successMessage = data,
        alert(this.successMessage);
        this.goToList()},
       error => {
         this.errorMessage = error.error,
         alert(this.errorMessage)});
  }

  goToList(){
    this.router.navigate(['/buses']);
  }

}
