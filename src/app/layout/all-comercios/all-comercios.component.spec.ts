import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComerciosComponent } from './all-comercios.component';

describe('AllComerciosComponent', () => {
  let component: AllComerciosComponent;
  let fixture: ComponentFixture<AllComerciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllComerciosComponent]
    });
    fixture = TestBed.createComponent(AllComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
