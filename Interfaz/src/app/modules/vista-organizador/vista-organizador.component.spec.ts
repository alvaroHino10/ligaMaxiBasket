import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaOrganizadorComponent } from './vista-organizador.component';

describe('VistaOrganizadorComponent', () => {
  let component: VistaOrganizadorComponent;
  let fixture: ComponentFixture<VistaOrganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaOrganizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
