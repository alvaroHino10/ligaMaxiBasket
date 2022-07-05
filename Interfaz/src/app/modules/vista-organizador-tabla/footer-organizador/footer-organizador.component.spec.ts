import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOrganizadorComponent } from './footer-organizador.component';

describe('FooterOrganizadorComponent', () => {
  let component: FooterOrganizadorComponent;
  let fixture: ComponentFixture<FooterOrganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterOrganizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
