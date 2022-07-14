import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFormDelegadoComponent } from './registro-form-delegado.component';

describe('RegistroFormDelegadoComponent', () => {
  let component: RegistroFormDelegadoComponent;
  let fixture: ComponentFixture<RegistroFormDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroFormDelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroFormDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
