import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {


  obj = {
    name: 'Spaza store',
    min: 10,
    logo: ''
    //logo: 'https://i.postimg.cc/XYGd2DMK/images.png'
  }
  cateList = [
    {
      name: 'beverage & drinks',
      image: 'https://i.postimg.cc/m2cJdqH6/1000095895-removebg-preview.png'
    },
    {
      name: 'Dairy, Eggs & Chilled Goods',
      image: 'https://i.postimg.cc/zGvCSZHN/1000095897-removebg-preview.png'
    }, {
      name: 'Frozen Foods',
      image: 'https://i.postimg.cc/JzSps4YL/1000095899-removebg-preview.png'
    }
  ]

  productList = [
    {
      name: 'Blue Ribbon Classic White Sliced Bread 700g',
      image: 'https://i.postimg.cc/nrsHMTdB/silo-product-image-v2-25Feb2026-180257-6009629181064-Straight-on-408344-600-400Wx400H.jpg',
      price: 17
    }, {
      name: 'Clover Full Cream Milk Fresh 2L',
      image: 'https://i.postimg.cc/KjdJyvk5/silo-product-image-v2-25Feb2026-180308-6001299000270-Straight-on-407950-618-400Wx400H.jpg',
      price: 29.99
    }, {
      name: 'Huletts White Sugar 2.5kg',
      image: 'https://i.postimg.cc/Fz5wy4mw/silo-product-image-v2-19Feb2024-100100-6001042000304-Straight-on-205099-2366-400Wx400H.jpg',
      price: 59.99
    }
  ]
}
  

