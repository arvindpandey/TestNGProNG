import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { EmpViewModel } from '../Model/EmpViewModel';
import { ReturnStatement } from '@angular/compiler';

@Injectable()
export class EmpSevices {
  //baseUrl = 'http://localhost:52513/Api/Employee'//Development...;
  baseUrl = 'http://localhost:81/Api/Employee'////IIS
  constructor(private http: HttpClient) { }

  AllEmployeeDetails(): Observable<EmpViewModel[]> {
    return this.http.get<EmpViewModel[]>(this.baseUrl + "/" + "AllEmployeeDetails");
  }
  EmployeeById(employeeId: String): Observable<EmpViewModel> {
    return this.http.get<EmpViewModel>(this.baseUrl + "/" + "EmployeeById" + "/" + employeeId);
  }
  CreatEmployee(employee: EmpViewModel): Observable<EmpViewModel> {
  
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let option = { headers: httpHeaders } 
    return this.http.post<EmpViewModel>(this.baseUrl+"/"+"CreateEmployee", employee, option); 
  }
  UpdateEmployeeDetails(employee: EmpViewModel): Observable<number> 
  {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpHeaders
    }
    return this.http.put<number>(this.baseUrl + "/" + "UpdateEmployeeDetails", employee, options);
  }
  DeleteEmaployeeByID(EmpID: string): Observable<number> 
  {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json'); 
    let options = { headers: httpHeaders }
    return this.http.post<number>(this.baseUrl + "/" + "DeleteEmployee" +"/"+ EmpID, options);
  }

}

