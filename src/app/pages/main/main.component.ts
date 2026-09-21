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
      image:'https://i.postimg.cc/ydJ9TtsN/1000094467-removebg-preview.png',
      name:'Halal'
    }

  ]
}
