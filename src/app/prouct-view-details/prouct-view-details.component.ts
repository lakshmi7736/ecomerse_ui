import { Component, OnInit } from '@angular/core';
import { Product } from '../_model/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prouct-view-details',
  templateUrl: './prouct-view-details.component.html',
  styleUrls: ['./prouct-view-details.component.css']
})
export class ProuctViewDetailsComponent implements OnInit {
  product: Product={
    productId:null,
    productName: '',
    productDescription: '',
    category: '',
    productDiscountedPrice: null,
    productActualPrice: null,
    productImages: [],
    quantity:null
  }
  ngOnInit(): void {
    this.product=this.activatedRoute.snapshot.data['product'];
  }

  selectedProductIndex=0;

  constructor(
    private activatedRoute : ActivatedRoute
  ){}

  changeIndex(index: number){
    this.selectedProductIndex=index;

  }

}
