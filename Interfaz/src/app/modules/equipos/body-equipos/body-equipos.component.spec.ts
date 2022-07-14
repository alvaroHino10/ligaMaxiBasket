import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyEquiposComponent } from './body-equipos.component';

describe('BodyEquiposComponent', () => {
  let component: BodyEquiposComponent;
  let fixture: ComponentFixture<BodyEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
