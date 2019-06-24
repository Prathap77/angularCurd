import { Component, OnInit } from '@angular/core';
import { Employees } from '../models/employees.model';

@Component({
  //selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employees[] = [
    {
      id: 1,
      name: 'Prathap',
      gender:'Male',
      email : 'prathap@hyniva.com',
      phoneNumber : '7893919177',
      contactPreference: 'Phone',
      isActive: true,
      dateOfBirth: new Date('04/09/1994'),
     
      //department: string;
      photoPath:'assets/images/My_Image.jpg',
    },
    {
      id: 1,
      name: 'Moon',
      gender:'Male',
      email : 'moon@hyniva.com',
      phoneNumber : '9052213663',
      contactPreference: 'Phone',
      dateOfBirth: new Date(),
      isActive: true,
      //department: string;
      photoPath:'assets/images/Moon.jpg',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
