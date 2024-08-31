import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {EmployeeService} from "../employee.service";
import {EmployeeModel} from "../employee.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatRowDef
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  dataSource:EmployeeModel[]=[];

  displayedColumns:string[]=[
    'employeeId',
    'employeeName',
    'employeeContactNUmber',
    'employeeAddress',
    'employeeGender',
    'employeeDepartment',
    'employeeSkills'
  ]

  constructor(public employeeService:EmployeeService){
    this.getEmployeeList();
  }

  ngOnInit(): void {
  }

  getEmployeeList():void{
    this.employeeService.getEmployee().subscribe({
      next:(res:EmployeeModel[])=>{
        console.log(res);
        this.dataSource=res;
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }



}
