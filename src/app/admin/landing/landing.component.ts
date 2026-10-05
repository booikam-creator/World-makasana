import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  form = new FormGroup({
    category: new FormControl('', Validators.required)
  });

  options = [
    { value: 'tech', label: 'Technology' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' }
  ];


}
