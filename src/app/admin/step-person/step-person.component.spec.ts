import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPersonComponent } from './step-person.component';

describe('StepPersonComponent', () => {
  let component: StepPersonComponent;
  let fixture: ComponentFixture<StepPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
