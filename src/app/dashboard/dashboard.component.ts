import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  email:string=""
  password:string=""
  userDetails:any= [
    {uname:"max",age:25},
    {uname:"midhun",age:35},
    {uname:"manuel",age:45},
    {uname:"Thomas",age:65},

  ]
  constructor(private ds:DataService){

    this.email =ds.email
    this.password = ds.pswd
        
  }

}
