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
    }
  ]
}
