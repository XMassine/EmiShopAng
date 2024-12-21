import {Component, OnInit} from '@angular/core';
import {ProductItemComponent} from "../product-item/product-item.component";
import {Product} from "../../models/Product";
import {ProduitsService} from "../../services/produits.service";
import {response} from "express";
import {map} from "rxjs";
import {NgForOf} from "@angular/common";
import {SharedService} from "../../services/shared.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    ProductItemComponent,
    NgForOf
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  products!:Product[]
  data:any
  keyword!:string


  constructor(private produitservice:ProduitsService,
              private shared:SharedService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.keyword=this.produitservice.keyword
    this.shared.keyword.subscribe(vl=>{
      this.produitservice.getAProductsByKeyWord(vl).subscribe( value => {this.products=value}
      )
    })
    //this.produitservice.getAllProducts().subscribe(value => {this.products=value})
    console.log(this.products)
  }


  openProduct(id:number) {
    this.router.navigate(["/product",id])
  }
}
