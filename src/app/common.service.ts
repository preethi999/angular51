import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 cart=[];
 img1="/assets/images/desert-1.jpg";
 img2="/assets/images/desert-2.jpg";
 img3="/assets/images/desert-3.jpg";
 img4="/assets/images/logo.png";
 img5="/assets/images/background.jpg";
 img6="/assets/images/desert-2.jpg";
 img7="/assets/images/desert-2.jpg";
 img8="/assets/images/desert-2.jpg";
 img9="/assets/images/desert-2.jpg";
 img10="/assets/images/desert-2.jpg";
 img11="/assets/images/desert-2.jpg";
 img12="/assets/images/desert-2.jpg";
  constructor() { 

  }
  productsList=[
    
    {id:1,name:"cakes-1",price:50,discount:10,quantity:1,img:this.img1},
    {id:2,name:"cakes-2",price:50,discount:10,quantity:1,img:this.img2},
    {id:3,name:"cakes-3",price:50,discount:10,quantity:1,img:this.img3},
    {id:4,name:"cakes-4",price:50,discount:10,quantity:1,img:this.img4},
    {id:5,name:"cakes-5",price:50,discount:10,quantity:1,img:this.img5},
    {id:6,name:"cakes-6",price:50,discount:10,quantity:1,img:this.img6},
    {id:7,name:"cakes-7",price:50,discount:10,quantity:1,img:this.img7},
    {id:8,name:"cakes-8",price:50,discount:10,quantity:1,img:this.img8},
    {id:9,name:"cakes-9",price:50,discount:10,quantity:1,img:this.img9},
    {id:10,name:"cakes-10",price:50,discount:10,quantity:1,img:this.img10},
    {id:11,name:"cakes-11",price:50,discount:10,quantity:1,img:this.img11},
    {id:12,name:"cakes-12",price:50,discount:10,quantity:1,img:this.img12}

  ]
}
