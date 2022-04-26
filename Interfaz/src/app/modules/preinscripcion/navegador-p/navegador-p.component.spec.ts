import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegadorPComponent } from './navegador-p.component';

describe('NavegadorPComponent', () => {
  let component: NavegadorPComponent;
  let fixture: ComponentFixture<NavegadorPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegadorPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegadorPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
