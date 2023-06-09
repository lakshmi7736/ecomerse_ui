import { Component, OnInit } from '@angular/core';
import { Category } from '../_model/category.model';
import { CategoryService } from '../_services/category.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.css']
})
export class AddNewCategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ){

  }
  ngOnInit(): void {
    this.getAllCategories()
  }
  errorMessage: string = '';
  successMessage: string='';
  displayedColumns: string[] = ['id', 'categoryName', 'edit','delete'];

  categoryDetails:Category[]=[];
   category:Category={
    categoryName: ''
   }
  addCategory(categoryForm: NgForm) {
    if (
      this.category.categoryName === '') {
      this.errorMessage = 'All fields are required';
    } else {
      this.errorMessage = '';
      this.categoryService.addCategory(categoryForm.value).subscribe(
        (response: Category) => {
          categoryForm.reset();
          this.showSuccessMessage('Category added successfully');
          this.getAllCategories();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  }

  public getAllCategories(){
    this.categoryService.getAllCategories()
    .subscribe(
      (resp: any)=>{
        this.categoryDetails=resp;
      },
      (error:HttpErrorResponse)=>{
          console.log(error);
      }
    );
  }



    
  showSuccessMessage(message: string) {
    this.successMessage = message;
    setTimeout(() => {
      this.successMessage = '';
    }, 2000); // Adjust the duration (in milliseconds) as per your requirement
  }
  deleteCategory(categoryId:number){
    this.categoryService.deleteCategory(categoryId).subscribe(
      (resp)=>{
        this.getAllCategories();
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }

  editCategoryDetails(categoryId: any){
    this.router.navigate(["/addNewCategory",{categoryId:categoryId}]);
  }

}
