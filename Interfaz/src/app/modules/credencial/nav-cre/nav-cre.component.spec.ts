import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCreComponent } from './nav-cre.component';

describe('NavCreComponent', () => {
  let component: NavCreComponent;
  let fixture: ComponentFixture<NavCreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
