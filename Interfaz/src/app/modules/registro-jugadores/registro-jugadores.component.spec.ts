import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroJugadoresComponent } from './registro-jugadores.component';

describe('RegistroJugadoresComponent', () => {
  let component: RegistroJugadoresComponent;
  let fixture: ComponentFixture<RegistroJugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroJugadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
