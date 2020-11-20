import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from '../Model/bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  busURL : string;

  constructor(private httpClient: HttpClient) {
    this.busURL = "http://localhost:7901/bus-service";
   }

  public getListOfBuses() : Observable<any> {
    return this.httpClient.get(this.busURL+"/getAllBuses")
  }

  public getBusBYbusId(busId:bigint) : Observable<Bus>{
    return this.httpClient.get<Bus>(this.busURL+"/getBusById/"+ busId);
  }

  public addBus(bus): Observable<Object>{
    return this.httpClient.post(this.busURL+"/addBus",bus,{responseType:'text'});
  }

  public updateBus(busId : bigint, bus: Bus): Observable<Object> {
    return this.httpClient.put(this.busURL+"/updateBus/"+busId,bus);
  }

  public deleteBus(busId : bigint): Observable<string> {
    return this.httpClient.delete(this.busURL+"/deleteBus/"+busId,{responseType:'text'});
  }
}
