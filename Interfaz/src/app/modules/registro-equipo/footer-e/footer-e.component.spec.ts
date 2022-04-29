import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEComponent } from './footer-e.component';

describe('FooterEComponent', () => {
  let component: FooterEComponent;
  let fixture: ComponentFixture<FooterEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
