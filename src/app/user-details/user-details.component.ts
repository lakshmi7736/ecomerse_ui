import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../_model/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userData: User[] = [];
  displayedColumns: string[] = ['userName', 'userFirstName', 'userLastName', 'edit', 'delete'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userDetails();
  }

  userDetails() {
    this.userService.getAllUsers().subscribe(
      (response: User[]) => {
        this.userData = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteUsers(userName:string){
    this.userService.deleteUser(userName).subscribe(
      (resp:any)=>{
        this.userDetails();
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }
}
