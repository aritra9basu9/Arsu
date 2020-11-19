import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product ={

     name: "Lenovo Laptop",
     description:"Best laptop",
     price:80000
  }

  pageTitle:string="this is awesome page"
  imageUrl:string='assets/nature.jpg'

  message:string="";

  private productSource="assets/products.json";
  public productList;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
     this.http.get(this.productSource).subscribe(
       data =>{
         console.log(data);
         this.productList=data;
       },
       err=>
       console.log(err)

     );

  }
  // submitAction(indata)
  // {
  //   console.log(indata.value);
  
  //   console.log('submit action is called')
  // }

}
