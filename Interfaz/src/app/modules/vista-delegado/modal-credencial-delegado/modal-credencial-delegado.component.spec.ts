import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCredencialDelegadoComponent } from './modal-credencial-delegado.component';

describe('ModalCredencialDelegadoComponent', () => {
  let component: ModalCredencialDelegadoComponent;
  let fixture: ComponentFixture<ModalCredencialDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCredencialDelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCredencialDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
