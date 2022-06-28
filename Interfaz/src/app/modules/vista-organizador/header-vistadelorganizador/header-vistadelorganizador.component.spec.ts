import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVistadelorganizadorComponent } from './header-vistadelorganizador.component';

describe('HeaderVistadelorganizadorComponent', () => {
  let component: HeaderVistadelorganizadorComponent;
  let fixture: ComponentFixture<HeaderVistadelorganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderVistadelorganizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderVistadelorganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
