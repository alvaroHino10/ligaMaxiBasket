import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyVistaOrganizadorComponent } from './body-vista-organizador.component';

describe('BodyVistaOrganizadorComponent', () => {
  let component: BodyVistaOrganizadorComponent;
  let fixture: ComponentFixture<BodyVistaOrganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyVistaOrganizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyVistaOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
