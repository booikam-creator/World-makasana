import { Component, ElementRef, HostListener } from '@angular/core';


export interface SelectOption {
  label: string;
  value: any;
}

@Component({
  selector: 'app-step-detail',
  templateUrl: './step-detail.component.html',
  styleUrl: './step-detail.component.css'
})
export class StepDetailComponent {

  business = {
    name: '',
    address: '',
    city: '',
    categoryBus: ''
  }

  busiCategories = [

    {
      name:'restaurants'
    },
    {
      name:'grocery'
    },
    {
      name:'general merchant'
    },
    {
      name:'other'
    },
    {
      name:'services'
    }
  ]
  options: SelectOption[] = [
    { label: 'I have one location', value: 'one' },
    { label: 'I have multiple locations', value: 'multiple' }
  ];

  isOpenCity = false;
  isOpenCate = false
  selectedOption: SelectOption | null = null;

  constructor(private elementRef: ElementRef) { }

  toggleDropdown(): void {
    this.isOpenCity = !this.isOpenCity;
  }
  toggleCate() {
    this.isOpenCate = !this.isOpenCate
  }

  selectOption(option: any): void {
    this.business.city = option;
    this.isOpenCity = false;
  }
  seleCate(option: any) {

    this.business.categoryBus = option
    this.isOpenCate = false
  }





 cities = [
  "Cape Town",
  "Johannesburg",
  "Durban",
  "Pretoria",
  "Gqeberha",
  "Bloemfontein",
  "Mbombela",
  "Polokwane",
  "Kimberley",
  "Makhanda ",
  "East London",
  "Pietermaritzburg",
  "Stellenbosch",
  "Paarl",
  "George",
  "Knysna",
  "Plettenberg Bay",
  "Hermanus",
  "Rustenburg",
  "Potchefstroom",
  "Upington",
  "Richards Bay",
  "Centurion",
  "Klerksdorp",
  "Mthatha"
];
                                                    
}