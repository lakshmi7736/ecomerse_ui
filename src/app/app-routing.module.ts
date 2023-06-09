import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
import { ShowProductImagesDialogComponent } from './show-product-images-dialog/show-product-images-dialog.component';
import { ProductResolveService } from './add-new-product/product-resolve.service';
import { AddNewCategoryComponent } from './add-new-category/add-new-category.component';
import { UpdateUserDialogComponent } from './update-user-dialog/update-user-dialog.component';
import { ProuctViewDetailsComponent } from './prouct-view-details/prouct-view-details.component';
import { OtpLoginComponent } from './otp-login/otp-login.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { BuyProductResolverService } from './buy-product-resolver.service';




const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'user', component: UserComponent, canActivate:[AuthGuard], data:{roles:['User','Admin']} },
  { path: 'login', component: LoginComponent },
  { path: "OtpLogin", component:OtpLoginComponent},
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register-admin', component: RegisterAdminComponent , canActivate:[AuthGuard], data:{roles:['Admin']}},
  { path : 'addNewProduct', component: AddNewProductComponent, canActivate:[AuthGuard], data:{roles:['Admin']},
    resolve:{
      product:ProductResolveService
    }},
  { path : 'showProductDetails', component: ShowProductDetailsComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'getAllUsers', component: UserDetailsComponent,canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'showImg', component: ShowProductImagesDialogComponent,canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'addNewCategory', component: AddNewCategoryComponent,canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'updateUser', component: UpdateUserDialogComponent,canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'productViewDetails', component: ProuctViewDetailsComponent,
  resolve:{
    product:ProductResolveService
  }
 },
 { path: 'buyProduct',component: BuyProductComponent,canActivate:[AuthGuard], data:{roles:['User']},
 resolve:{
  productDetails: BuyProductResolverService
} }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}