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
    //logo:''
    logo: 'https://i.postimg.cc/XYGd2DMK/images.png'
  }
}


