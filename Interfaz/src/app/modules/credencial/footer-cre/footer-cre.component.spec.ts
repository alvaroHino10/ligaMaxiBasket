import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCreComponent } from './footer-cre.component';

describe('FooterCreComponent', () => {
  let component: FooterCreComponent;
  let fixture: ComponentFixture<FooterCreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
