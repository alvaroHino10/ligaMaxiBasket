import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegadorDelegadoComponent } from './navegador-delegado.component';

describe('NavegadorDelegadoComponent', () => {
  let component: NavegadorDelegadoComponent;
  let fixture: ComponentFixture<NavegadorDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegadorDelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegadorDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
