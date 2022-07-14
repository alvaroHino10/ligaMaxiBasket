import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroJComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroJComponent;
  let fixture: ComponentFixture<RegistroJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});