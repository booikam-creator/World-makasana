import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  shopList= [
    {
      name:"KWA ACE eKITCHEN",
      logo:'https://i.postimg.cc/qBmBLr6Q/1789483061963.jpg',
      cover:'https://i.postimg.cc/rwBZqzY2/1789483155738.jpg'
    },
    {
      name:'Goldern Dash',
      cover:'https://i.postimg.cc/KjSBxcVj/cm6i5aq1k000003lebrgq2ki9.jpg'
    },{
      name:'Rands Cape Town',
      cover:'https://i.postimg.cc/s2Lv4DHb/1789571627911.jpg'
    }
  ]

  serviceList= [
    {
      name:"Relaxation Massage",
      image:"https://i.postimg.cc/Rhvfkmyw/1780391344430-e62ebf.jpg",
      price:300
    },
    {
      name:"Split AC cleaning",
      image:'https://i.postimg.cc/K4SXG97x/77c846f1a3849b039118493081da18f4.jpg',
      price:1200
    }
  ]

  productList = [
    {
      name:'Blue Ribbon Classic White Sliced Bread 700g',
      image:'https://i.postimg.cc/nrsHMTdB/silo-product-image-v2-25Feb2026-180257-6009629181064-Straight-on-408344-600-400Wx400H.jpg',
      price:17
    },{
      name:'Clover Full Cream Milk Fresh 2L',
      image:'https://i.postimg.cc/KjdJyvk5/silo-product-image-v2-25Feb2026-180308-6001299000270-Straight-on-407950-618-400Wx400H.jpg',
      price:29.99
    },{
      name:'Huletts White Sugar 2.5kg',
      image:'https://i.postimg.cc/Fz5wy4mw/silo-product-image-v2-19Feb2024-100100-6001042000304-Straight-on-205099-2366-400Wx400H.jpg',
      price:59.99
    }
  ]
}
