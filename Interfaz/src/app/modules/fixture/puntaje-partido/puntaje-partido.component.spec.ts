import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntajePartidoComponent } from './puntaje-partido.component';

describe('PuntajePartidoComponent', () => {
  let component: PuntajePartidoComponent;
  let fixture: ComponentFixture<PuntajePartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntajePartidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntajePartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
