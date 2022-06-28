import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterVistadelegadoComponent } from './footer-vistadelegado.component';

describe('FooterVistadelegadoComponent', () => {
  let component: FooterVistadelegadoComponent;
  let fixture: ComponentFixture<FooterVistadelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterVistadelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterVistadelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
