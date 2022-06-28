import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterVistadeljugadorComponent } from './footer-vistadeljugador.component';

describe('FooterVistadeljugadorComponent', () => {
  let component: FooterVistadeljugadorComponent;
  let fixture: ComponentFixture<FooterVistadeljugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterVistadeljugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterVistadeljugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
