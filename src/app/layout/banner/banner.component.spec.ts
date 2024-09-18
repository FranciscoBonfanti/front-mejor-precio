import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: bannerComponent;
  let fixture: ComponentFixture<bannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [bannerComponent]
    });
    fixture = TestBed.createComponent(bannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
