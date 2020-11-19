import { Component, OnInit } from '@angular/core';

export class List{

  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate: Date
){}
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // list=[
  //    {id:1, description: "Learn AWS"},
  //    {id:2, description: "Learn Docker"},
  //    {id:3, description: "Learn React"},
  //    {id:4, description: "Learn Angular"},
  // ]

  list=[
    new List(1, "Learn AWS" , false, new Date()),
    new List(2, "Learn Docker" , false, new Date()),
    new List(3, "Learn React" , false, new Date()),
    new List(4, "Learn Angular" , false, new Date()),
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
