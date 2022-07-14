import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPreinscripcionComponent } from './modal-preinscripcion.component';

describe('ModalPreinscripcionComponent', () => {
  let component: ModalPreinscripcionComponent;
  let fixture: ComponentFixture<ModalPreinscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPreinscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPreinscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
