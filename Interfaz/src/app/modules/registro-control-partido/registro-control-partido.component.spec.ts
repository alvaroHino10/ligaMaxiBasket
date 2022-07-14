import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroControlPartidoComponent } from './registro-control-partido.component';

describe('RegistroControlPartidoComponent', () => {
  let component: RegistroControlPartidoComponent;
  let fixture: ComponentFixture<RegistroControlPartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroControlPartidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroControlPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
