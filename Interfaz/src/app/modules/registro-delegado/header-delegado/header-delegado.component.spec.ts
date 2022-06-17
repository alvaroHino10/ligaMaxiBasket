import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDelegadoComponent } from './header-delegado.component';

describe('HeaderDelegadoComponent', () => {
  let component: HeaderDelegadoComponent;
  let fixture: ComponentFixture<HeaderDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
