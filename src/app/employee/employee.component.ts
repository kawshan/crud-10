import {Component, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatFabButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatOption, MatSelect} from "@angular/material/select";
import {EmployeeService} from "../employee.service";
import {EmployeeModel} from "../employee.model";
import {FormsModule, NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatFormField,
    MatInput,
    MatRadioGroup,
    MatLabel,
    MatRadioButton,
    MatSelect,
    MatOption,
    MatFabButton,
    FormsModule,
    RouterLink
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  employee:EmployeeModel={
    employeeAddress: "",
    employeeContactNUmber: "",
    employeeDepartment: "",
    employeeGender: "",
    employeeId: 0,
    employeeName: "",
    employeeSkills: ""
  }

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
  }


  saveEmployee(employeeForm: NgForm) {
    this.employeeService.saveEmployee(this.employee).subscribe({
      next:(res: EmployeeModel) => {
        console.log(res);
        employeeForm.reset();
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      },
    });
  }



}
