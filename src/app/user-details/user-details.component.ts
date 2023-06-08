import { Component, OnInit } from '@angular/core';
import { User } from '../_model/user.model';
import { AdminService } from '../admin.service';
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
    this.getUserDetails();
  }
  displayedColumns: string[] = ['id', 'userName', 'userFirstName','userLastName','gmail', 'phoneNumber','edit','delete'];


  showSuccessMessage(message: string) {
    this.successMessage=message;
    setTimeout(() => {
      this.successMessage = '';
    }, 2000); // Adjust the duration (in milliseconds) as per your requirement
  }

  register(registerForm: NgForm) {
      this.adminService.registerUser(registerForm.value).subscribe(
        (resp) => {
          registerForm.reset();
          this.getUserDetails();
        },
        (err) => {
          console.log(err);
        }
      );
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

  deleteUser(userId:number){
    this.adminService.deleteUser(userId).subscribe(
      (resp:any)=>{
        this.getUserDetails();
    
      },
      (err: any)=>{
        console.log(err);
      }
    );
  }
  editUserDetails(userId: any){
    
  }

}

