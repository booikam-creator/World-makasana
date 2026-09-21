import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  

  categoryList = [
    {
      name:'Spaza Shop',
      image:'https://i.postimg.cc/m2wFdX4K/1000093964-removebg-preview.png'

    },
    {
      image:'https://i.postimg.cc/KzC4fY8t/1000094497-removebg-preview.png',
      name:'Bakery'
    },{
      name:'Fresh Fruit & Veg',
      image:'https://i.postimg.cc/xTMgKJ1z/1000094498-removebg-preview.png'
    },{
      name:'Snacks',
      image:'https://i.postimg.cc/N09KHTQW/1000094499-removebg-preview.png'
    },
    {
      name:'Alcohol',
      image:'https://ibb.co/JRYxK8vw'
    }
  ]
}
