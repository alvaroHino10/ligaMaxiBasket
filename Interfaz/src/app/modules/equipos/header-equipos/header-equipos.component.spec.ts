import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEquiposComponent } from './header-equipos.component';

describe('HeaderEquiposComponent', () => {
  let component: HeaderEquiposComponent;
  let fixture: ComponentFixture<HeaderEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
