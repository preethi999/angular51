import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private c:CommonService) { }
  // listproduct=this.c.

loop=this.c.productsList
  ngOnInit() {
   
  }
  discontprice(a:number,b:number){
    const ab=(a*(100-b))/100
    return ab
  }
  cartadd(s:any){
    this.c.cart.push(s);
  }

}
