import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
 datepickerConfig: Partial<BsDatepickerConfig>;
  gender= 'm';
  contactPreference = 'phone';
  isActive = true;
  constructor() { 
    this.datepickerConfig = Object.assign({},{containerClass: 'theme-dark-blue',showWeekNumbers:false,maxDate:new Date(),dateInputFormat:'YYYY-MM-DD'})
  }

  ngOnInit() {
  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
  saveEmployee(employeeForm: NgForm): void{
    console.log(employeeForm.value);
  }
}
