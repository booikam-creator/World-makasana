import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReatailComponent } from './reatail.component';

describe('ReatailComponent', () => {
  let component: ReatailComponent;
  let fixture: ComponentFixture<ReatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReatailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
