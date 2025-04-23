import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentcreateComponent } from './appointmentcreate.component';

describe('AppointmentcreateComponent', () => {
  let component: AppointmentcreateComponent;
  let fixture: ComponentFixture<AppointmentcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentcreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
