import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
    empName:string = "Max Miller"
    empImageUrl:string = "https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?rs=1&pid=ImgDetMain"
    empDesg:string = ""
    empSalary:string = ""
    userAdd = ()=>{
      alert("Add button clicked")
    }
   

    getEmpName =(event:any)=>{
      this.empName = event.target.value
      
    }

    userSubmit(userDetails:any){

      if(userDetails.value){
        alert(`${userDetails.value} added`)

      }else{
        alert("please fill the form")
      }
    }


    empSubmit(){

      if(!this.empDesg || !this.empName || !this.empSalary){
            alert("Please fill the form completely")
      }else{
        alert(
        `  ------employee details------- 
        Employee Name : ${this.empName}
        Employee Desg : ${this.empDesg}
        Employee Salary : ${this.empSalary}
        `)
      }
  
    }
    
}

