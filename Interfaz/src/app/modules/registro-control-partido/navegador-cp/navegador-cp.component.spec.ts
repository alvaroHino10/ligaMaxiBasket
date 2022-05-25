import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegadorCpComponent } from './navegador-cp.component';

describe('NavegadorCpComponent', () => {
  let component: NavegadorCpComponent;
  let fixture: ComponentFixture<NavegadorCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegadorCpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegadorCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
