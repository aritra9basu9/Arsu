import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 url='http://localhost:7070/customer'
  constructor(private httpClient: HttpClient) { }

  save (customer:FormGroup)
  {
    return this.httpClient.post(this.url,customer.value);
  }
  update (customer:FormGroup)
  {
    return this.httpClient.put(this.url,customer.value);
  }

  readAll()
  {
    return this.httpClient.get<any>(this.url);
  }
  read(id)
  {
    return this.httpClient.get<any>(this.url+ '/' + id);
  }
  delete(id)
  {
    return this.httpClient.delete<any>(this.url+ '/' + id);
  }
}
