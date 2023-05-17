import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../_model/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AdminService } from '../admin.service';
import { NgForOfContext } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  errorMessage:string='';
  successMessage: string='';
  userData: User[] = [];

  constructor(
    private adminService: AdminService
  ) {
    this.getUserDetails();
   }

  ngOnInit(): void {

  }

  user: User={
    userName :'',
    userFirstName:'',
    userLastName:'',
    userPassword:''
  }
  showSuccessMessage(message: string) {
    this.successMessage=message;
    setTimeout(() => {
      this.successMessage = '';
    }, 2000); // Adjust the duration (in milliseconds) as per your requirement
  }

  register(registerForm: NgForm) {
    if (
      registerForm.value.userFirstName === '' ||
      registerForm.value.userLastName === '' ||
      registerForm.value.userName === '' ||
      registerForm.value.userPassword === ''
    ) {
      this.errorMessage = 'All fields are required';
    } else {
      this.errorMessage = '';
      this.adminService.registerUser(registerForm.value).subscribe(
        (resp) => {
          this.showSuccessMessage('User added successfully');
          console.log(resp);
          registerForm.reset();
          this.getUserDetails();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  getUserDetails(){
    this.adminService.getUsers().subscribe(
      (resp:any)=>{
        this.userData=resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  deleteUser(user: { userName: string; }){
    this.adminService.deleteUser(user.userName).subscribe(
      (resp:any)=>{
        this.getUserDetails();
        console.log(resp);
      },
      (err: any)=>{
        console.log(err);
      }
    );
  }
  

}
