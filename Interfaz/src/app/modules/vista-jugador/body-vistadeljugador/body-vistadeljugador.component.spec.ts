import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyVistadeljugadorComponent } from './body-vistadeljugador.component';

describe('BodyVistadeljugadorComponent', () => {
  let component: BodyVistadeljugadorComponent;
  let fixture: ComponentFixture<BodyVistadeljugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyVistadeljugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyVistadeljugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
