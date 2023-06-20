import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.css']
})
export class OtpLoginComponent implements OnInit {
[x: string]: any;
  ngOnInit(): void {

  }
  errorMessage: string = '';
  loading = false;
  generateOTPError = '';
  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  otpLogin(otpLoginForm: NgForm) {
    this.userService.login(otpLoginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  generateOTP(phoneNumber: string) {
    this.loading = true; // Show loading indicator
  
    this.userService.generateOTP(phoneNumber).subscribe(
      (response: any) => {
        // Handle successful OTP generation
        this.loading = false; // Hide loading indicator
        this.generateOTPError = ''; // Clear any previous error message
  
        // Handle the response as needed
        // For example, display a success message to the user
        console.log('OTP generated successfully:', response.message);
      },
      (error) => {
        // Handle error during OTP generation
        this.loading = false; // Hide loading indicator
        this.generateOTPError = error.message || 'Error generating OTP';
  
        // Handle the error as needed
        console.log('Error generating OTP:', error);
      }
    );
  }
  


}
  
