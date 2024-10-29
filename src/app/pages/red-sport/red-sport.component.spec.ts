import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedSportComponent } from './red-sport.component';

describe('RedSportComponent', () => {
  let component: RedSportComponent;
  let fixture: ComponentFixture<RedSportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedSportComponent]
    });
    fixture = TestBed.createComponent(RedSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
