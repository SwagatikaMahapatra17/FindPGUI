import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AppserviceService {
private url='https://localhost:44341';
rcvtoken:any;
  constructor(private http:HttpClient) { }

  GetLogin(loginobj: any): Observable<any> {
    const endpoint = `${this.url}/api/V1/User/Login`;  
    const request = this.http.post(endpoint, loginobj);
    return request;
  }
  GetAllCity(): Observable<any> {
    this.rcvtoken=localStorage.getItem("tokendetails");
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.rcvtoken}`
    });
    const endpoint = `${this.url}/api/V1/City/GetAllCity`;  
    const request = this.http.get(endpoint,{ headers });
    return request;
  }
  // GetSignUp(signupobj: any): Observable<any> {
  //   const endpoint = `${this.url}/api/V1/User/Register`;  
  //   const request = this.http.post(endpoint, signupobj);
  //   return request;
  // }
  GetSignUp(signupobj: any): Observable<any> {
  const endpoint = `${this.url}/api/V1/User/Register`;
  return this.http.post(endpoint, signupobj);
}
 UpdatePassword(passObj:any):Observable<any>{
  const endpoint = `${this.url}/api/V1/User/UpdatePassword`;
  return this.http.put(endpoint, passObj);
 }
}
