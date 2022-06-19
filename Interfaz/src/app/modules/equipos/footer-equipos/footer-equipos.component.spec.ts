import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEquiposComponent } from './footer-equipos.component';

describe('FooterEquiposComponent', () => {
  let component: FooterEquiposComponent;
  let fixture: ComponentFixture<FooterEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
