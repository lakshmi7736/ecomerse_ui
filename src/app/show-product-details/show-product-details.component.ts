import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from '../_model/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';
import { ImageProcessingService } from '../image-processing.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent  implements OnInit {

  productDetails:Product[]=[];

  displayedColumns: string[] = ['id', 'productName', 'productDescription', 'productDiscountedPrice','productActualPrice','images','edit','delete'];

  constructor(
    private productService:ProductService,
    public imgDialog: MatDialog,
    private imgProcessigService: ImageProcessingService
  ){

  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts(){
    this.productService.getAllProducts()
    .pipe(
      map((x:Product[],i)=>x.map((product:Product)=>this.imgProcessigService.createImages(product)))
    )
    .subscribe(
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
  showImages(product:Product){
    this.imgDialog.open(ShowProductImagesDialogComponent,{
      data:{
        images:product.productImages
      },
      height:'500px',
      width:'800px'
    });
  }
}
