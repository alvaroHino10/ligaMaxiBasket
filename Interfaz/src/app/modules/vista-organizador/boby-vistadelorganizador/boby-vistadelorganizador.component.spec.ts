import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobyVistadelorganizadorComponent } from './boby-vistadelorganizador.component';

describe('BobyVistadelorganizadorComponent', () => {
  let component: BobyVistadelorganizadorComponent;
  let fixture: ComponentFixture<BobyVistadelorganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BobyVistadelorganizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BobyVistadelorganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
