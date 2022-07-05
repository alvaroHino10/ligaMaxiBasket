import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaOrganizadorTablaComponent } from './vista-organizador-tabla.component';

describe('VistaOrganizadorTablaComponent', () => {
  let component: VistaOrganizadorTablaComponent;
  let fixture: ComponentFixture<VistaOrganizadorTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaOrganizadorTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaOrganizadorTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
