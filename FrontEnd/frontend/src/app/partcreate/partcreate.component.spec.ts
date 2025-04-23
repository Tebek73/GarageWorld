import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartcreateComponent } from './partcreate.component';

describe('PartcreateComponent', () => {
  let component: PartcreateComponent;
  let fixture: ComponentFixture<PartcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartcreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
