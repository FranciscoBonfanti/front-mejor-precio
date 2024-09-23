import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProdComponent } from './card-prod.component';

describe('CardProdComponent', () => {
  let component: CardProdComponent;
  let fixture: ComponentFixture<CardProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProdComponent]
    });
    fixture = TestBed.createComponent(CardProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
