import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
takeitem=this.c.cart
  constructor(private c:CommonService) { }

  ngOnInit() {
  }

}
