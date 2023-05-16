import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

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
}
