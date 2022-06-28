import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDelegadoComponent } from './vista-delegado.component';

describe('VistaDelegadoComponent', () => {
  let component: VistaDelegadoComponent;
  let fixture: ComponentFixture<VistaDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaDelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
