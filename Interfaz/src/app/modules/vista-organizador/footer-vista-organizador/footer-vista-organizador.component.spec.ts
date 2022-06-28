import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterVistaOrganizadorComponent } from './footer-vista-organizador.component';

describe('FooterVistaOrganizadorComponent', () => {
  let component: FooterVistaOrganizadorComponent;
  let fixture: ComponentFixture<FooterVistaOrganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterVistaOrganizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterVistaOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
