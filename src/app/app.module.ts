import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
//import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { EmployeesComponent } from './employees/employee.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';

const appRoutes: Routes = [
  {path: 'employees',component:EmployeesComponent},
  {path: 'create',component:CreateEmployeeComponent},
  {path: '', redirectTo: '/employees', pathMatch : 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    //ListEmployeesComponent,
    EmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
