import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVistaequipospreinscritosComponent } from './modal-vistaequipospreinscritos.component';

describe('ModalVistaequipospreinscritosComponent', () => {
  let component: ModalVistaequipospreinscritosComponent;
  let fixture: ComponentFixture<ModalVistaequipospreinscritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalVistaequipospreinscritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVistaequipospreinscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
