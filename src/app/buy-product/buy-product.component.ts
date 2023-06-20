import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderDetails } from '../_model/order-details.model';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit{
 
  errorMessage: string = '';
  successMessage: string='';
  productDetails:Product[]=[];

  ngOnInit(): void {
    this.productDetails= this.activatedRoute.snapshot.data['productDetails'];
    this.productDetails.forEach(x=> this.orderDetails.orderProductQuantityList.push(
      {productId:x.productId,quantity:1}
    ));
    console.log(this.productDetails);
     console.log(this.orderDetails);
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ){}

  orderDetails:OrderDetails={
    fullName: '',
    fullAddress: '', 
    gmail: '',
    contactNumber: '',
    alternativeContactNumber: '',
    orderProductQuantityList: []
  }

  public placeOrder(orderForm:NgForm){
    this.productService.placeOrder(this.orderDetails).subscribe(
      (resp: any)=>{
        console.log(resp);
        orderForm.reset;
      },
      (err: any)=>{
        console.log(err);
      }
    );
  }
}
