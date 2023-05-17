import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  httpClient: any;

  constructor(
    private http:HttpClient
  ) { }
     API='http://localhost:9090'

  public registerUser(userData: any){
    return this.http.post(this.API+'/registerUser',userData);
  }

  public getUsers(){
    return this.http.get(this.API+'/getUsers')
  }
  public deleteUser(userName:string){
    return this.http.delete("http://localhost:9090/deleteUser/"+userName);
  }
  
}
