import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent {
  constructor(
    private userService:UserService,
    private router: Router
  ){}


  registerAdmin(registerForm: NgForm){
    console.log(registerForm.value)
    this.userService.registerAdmin(registerForm.value).subscribe(
      (response)=>{
        this.router.navigate(['/login']);
      },
      (error)=>{
        console.log(error);

      }
    );
  }
  loginUser(){
    this.router.navigate(['/login'])
  }

}
