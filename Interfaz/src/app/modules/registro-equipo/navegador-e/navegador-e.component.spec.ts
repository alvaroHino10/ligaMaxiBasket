import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegadorEComponent } from './navegador-e.component';

describe('NavegadorEComponent', () => {
  let component: NavegadorEComponent;
  let fixture: ComponentFixture<NavegadorEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegadorEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegadorEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
