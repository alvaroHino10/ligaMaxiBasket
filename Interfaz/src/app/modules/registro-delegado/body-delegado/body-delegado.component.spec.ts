import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDelegadoComponent } from './body-delegado.component';

describe('BodyDelegadoComponent', () => {
  let component: BodyDelegadoComponent;
  let fixture: ComponentFixture<BodyDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyDelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
