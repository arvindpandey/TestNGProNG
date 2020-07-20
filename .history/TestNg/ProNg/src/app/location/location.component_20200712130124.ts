import { Component, OnInit } from '@angular/core';
import { EmpSevices } from '../Shared/emp-sevices';
import { EmpViewModel } from '../Model/EmpViewModel';

import { FormGroup, FormControl, Validator, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  dataSaved = false;
  employeeform: any;
  allemployee: Observable<EmpViewModel[]>;
  employeeIdToUpdate = null;
  message = null;
  constructor(private formbuilder: FormBuilder, private empService: EmpSevices) {

  }

  ngOnInit(): void {
    this.employeeform = this.formbuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Gender: ['', Validators.required],
      Degination: ['', Validators.required],
      EmailID: ['', Validators.required],
      Address: ['', Validators.required]
    });
    this.loadAllEmployee();
  }
  loadAllEmployee(){
    this.allemployee = this.empService.AllEmployeeDetails();
  }

  onFormSubmit(employeeform)
  {
    this.dataSaved = false;
    const employee = this.employeeform.value;
    this.CreateEmployee(employee);
    this.employeeform.reset();

  }
  // Create Employee..................

  CreateEmployee(employee: EmpViewModel)
  {

    if (this.employeeIdToUpdate == null) {
      this.empService.CreatEmployee(employee).subscribe
        (
          () => {
            this.dataSaved = true;
            this.message = 'Record Save Successfully..';
            this.employeeIdToUpdate = null;
            this.employeeform.reset();
            this.ngOnInit();
          });
    }
    else
    {
      employee.ID = this.employeeIdToUpdate;
      this.empService.UpdateEmployeeDetails(employee).subscribe(() => {
        this.dataSaved = true;
        this.message = 'Record Update Successfully..';
        this.employeeIdToUpdate = null;
        this.employeeform.reset();
        this.ngOnInit();
      });
    }

  }
  // End.....................

  loadEmployeeToEdit(employeeID: string) {
    this.empService.EmployeeById(employeeID).subscribe(EmpViewModel => {
      this.message = null;
      this.dataSaved = false;
      this.employeeIdToUpdate = EmpViewModel.ID;
      this.employeeform.controls.FirstName.setValue(EmpViewModel.FirstName);
      this.employeeform.controls.LastName.setValue(EmpViewModel.LastName);
      this.employeeform.controls.Gender.setValue(EmpViewModel.Gender);
      this.employeeform.controls.Degination.setValue(EmpViewModel.Degination);
      this.employeeform.controls.EmailID.setValue(EmpViewModel.EmailID);
      this.employeeform.controls.Address.setValue(EmpViewModel.Address);

    });
  }
  deleteEmployee(employeeId: string){

    this.empService.DeleteEmaployeeByID(employeeId).subscribe(() => {
      this.dataSaved = true;
      this.message = 'Record Deleted Successfully..';
      this.employeeIdToUpdate = null;
      this.employeeform.reset();
      this.ngOnInit();
    });
  }
  resetForm(){
    this.employeeform.reset();
  }
}
