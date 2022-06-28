import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaJugadorComponent } from './vista-jugador.component';

describe('VistaJugadorComponent', () => {
  let component: VistaJugadorComponent;
  let fixture: ComponentFixture<VistaJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
