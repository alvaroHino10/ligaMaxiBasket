import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyJugadoresComponent } from './body-jugadores.component';

describe('BodyJugadoresComponent', () => {
  let component: BodyJugadoresComponent;
  let fixture: ComponentFixture<BodyJugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyJugadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
