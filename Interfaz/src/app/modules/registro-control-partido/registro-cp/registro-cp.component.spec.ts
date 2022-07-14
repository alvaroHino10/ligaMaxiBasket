import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCpComponent } from './registro-cp.component';

describe('RegistroCpComponent', () => {
  let component: RegistroCpComponent;
  let fixture: ComponentFixture<RegistroCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
