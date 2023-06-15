import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../_services/admin.service';


@Component({
  selector: 'app-update-user-dialog',
  templateUrl: './update-user-dialog.component.html',
  styleUrls: ['./update-user-dialog.component.css']
})
export class UpdateUserDialogComponent {
  errorMessage: string = '';
  successMessage: string='';

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  register(updateForm: NgForm) {
    this.adminService.updateUser().subscribe(
      (response:any) => {

        this.showSuccessMessage('User updated successfully');
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
