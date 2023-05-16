import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage: string = '';
  successMessage: string='';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  register(registerForm: NgForm) {
    this.userService.register(registerForm.value).subscribe(
      (response:any) => {
      
        this.router.navigate(['/login']);
      },
      (error) => {
        if (error.status === 409) {
          this.errorMessage = 'Username already exists';
    
        } else {
          console.log(error);
        }
      }
    );
  }

  showSuccessMessage(message: string) {
    this.successMessage = message;
    setTimeout(() => {
      this.successMessage = '';
    }, 2000); // Adjust the duration (in milliseconds) as per your requirement
  }

  loginUser() {
    this.router.navigate(['/login']);
  }
}
