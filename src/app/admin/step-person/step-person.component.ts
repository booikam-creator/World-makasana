import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-step-person',
  templateUrl: './step-person.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './step-person.component.css'
})
export class StepPersonComponent {
  selectedDate: Date | null = null;

  onDateSelected(event: any): void {
    this.selectedDate = event.value;
    console.log('Selected date:', this.selectedDate);
  }

}
