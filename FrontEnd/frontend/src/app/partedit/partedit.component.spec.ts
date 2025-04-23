import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteditComponent } from './partedit.component';

describe('ParteditComponent', () => {
  let component: ParteditComponent;
  let fixture: ComponentFixture<ParteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParteditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
