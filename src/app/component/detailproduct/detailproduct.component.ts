import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ProduitsService} from "../../services/produits.service";
import {ActivatedRoute} from "@angular/router";
import {AddToCartComponent} from "../add-to-cart/add-to-cart.component";

@Component({
  selector: 'app-detailproduct',
  standalone: true,
  imports: [
    AddToCartComponent
  ],
  templateUrl: './detailproduct.component.html',
  styleUrl: './detailproduct.component.css'
})
export class DetailproductComponent implements OnInit{

  product!:Product

  constructor(private produitservice:ProduitsService,
              private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get("id")
    if(id==null){

    }
    else {
      this.produitservice.getProductById(id).subscribe(value => {this.product=value})

    }
    console.log(this.product)
  }



}
