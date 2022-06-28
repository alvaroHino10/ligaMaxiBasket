import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterVistadelorganizadorComponent } from './footer-vistadelorganizador.component';

describe('FooterVistadelorganizadorComponent', () => {
  let component: FooterVistadelorganizadorComponent;
  let fixture: ComponentFixture<FooterVistadelorganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterVistadelorganizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterVistadelorganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
