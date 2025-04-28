import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcreateComponent } from './carcreate.component';

describe('CarcreateComponent', () => {
  let component: CarcreateComponent;
  let fixture: ComponentFixture<CarcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarcreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
