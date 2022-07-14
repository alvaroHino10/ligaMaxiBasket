import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyVistadelegadoComponent } from './body-vistadelegado.component';

describe('BodyVistadelegadoComponent', () => {
  let component: BodyVistadelegadoComponent;
  let fixture: ComponentFixture<BodyVistadelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyVistadelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyVistadelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
