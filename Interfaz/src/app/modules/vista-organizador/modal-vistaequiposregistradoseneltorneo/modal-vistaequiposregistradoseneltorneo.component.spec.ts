import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVistaequiposregistradoseneltorneoComponent } from './modal-vistaequiposregistradoseneltorneo.component';

describe('ModalVistaequiposregistradoseneltorneoComponent', () => {
  let component: ModalVistaequiposregistradoseneltorneoComponent;
  let fixture: ComponentFixture<ModalVistaequiposregistradoseneltorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVistaequiposregistradoseneltorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVistaequiposregistradoseneltorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
