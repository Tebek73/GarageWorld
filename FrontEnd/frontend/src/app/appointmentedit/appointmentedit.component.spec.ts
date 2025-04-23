import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmenteditComponent } from './appointmentedit.component';

describe('AppointmenteditComponent', () => {
  let component: AppointmenteditComponent;
  let fixture: ComponentFixture<AppointmenteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmenteditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmenteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
