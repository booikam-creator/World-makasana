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
  label = 'Number of locations';
  options: SelectOption[] = [
    { label: 'I have one location', value: 'one' },
    { label: 'I have multiple locations', value: 'multiple' }
  ];

  isOpen = false;
  selectedOption: SelectOption | null = null;

  constructor(private elementRef: ElementRef) { }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: SelectOption): void {
    this.selectedOption = option;
    this.isOpen = false;
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}

