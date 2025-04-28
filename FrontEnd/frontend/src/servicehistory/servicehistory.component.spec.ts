import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicehistoryComponent } from './servicehistory.component';

describe('ServicehistoryComponent', () => {
  let component: ServicehistoryComponent;
  let fixture: ComponentFixture<ServicehistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicehistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
