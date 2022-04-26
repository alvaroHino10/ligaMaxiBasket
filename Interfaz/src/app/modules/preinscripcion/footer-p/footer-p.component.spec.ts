import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPComponent } from './footer-p.component';

describe('FooterPComponent', () => {
  let component: FooterPComponent;
  let fixture: ComponentFixture<FooterPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
