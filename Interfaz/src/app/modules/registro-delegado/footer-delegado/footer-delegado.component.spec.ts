import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDelegadoComponent } from './footer-delegado.component';

describe('FooterDelegadoComponent', () => {
  let component: FooterDelegadoComponent;
  let fixture: ComponentFixture<FooterDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterDelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
