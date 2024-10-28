import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMapaComponent } from './sidenav-mapa.component';

describe('SidenavMapaComponent', () => {
  let component: SidenavMapaComponent;
  let fixture: ComponentFixture<SidenavMapaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavMapaComponent]
    });
    fixture = TestBed.createComponent(SidenavMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
