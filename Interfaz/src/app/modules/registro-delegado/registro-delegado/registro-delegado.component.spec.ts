import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDelegadoComponent } from './registro-delegado.component';

describe('RegistroDelegadoComponent', () => {
  let component: RegistroDelegadoComponent;
  let fixture: ComponentFixture<RegistroDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
