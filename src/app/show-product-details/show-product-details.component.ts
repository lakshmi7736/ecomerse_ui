import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from '../_model/product.model';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent  implements OnInit {

  productDetails:Product[]=[];

  displayedColumns: string[] = ['id', 'productName', 'productDescription', 'productDiscountedPrice','productActualPrice','edit','delete'];

  constructor(
    private productService:ProductService
  ){

  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts(){
    this.productService.getAllProducts().subscribe(
      (resp: Product[])=>{

        this.productDetails=resp;
      },
      (error:HttpErrorResponse)=>{
          console.log(error);
      }
    );
  }

  deleteProducts(productId:number){
    this.productService.deleteProducts(productId).subscribe(
      (resp)=>{
        this.getAllProducts();
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }

}
