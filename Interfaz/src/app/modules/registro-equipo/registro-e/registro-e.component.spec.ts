import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEComponent } from './registro-e.component';

describe('RegistroEComponent', () => {
  let component: RegistroEComponent;
  let fixture: ComponentFixture<RegistroEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
