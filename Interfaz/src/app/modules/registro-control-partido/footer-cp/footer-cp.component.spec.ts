import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCpComponent } from './footer-cp.component';

describe('FooterCpComponent', () => {
  let component: FooterCpComponent;
  let fixture: ComponentFixture<FooterCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
