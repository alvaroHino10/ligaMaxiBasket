import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVistadelegadoComponent } from './header-vistadelegado.component';

describe('HeaderVistadelegadoComponent', () => {
  let component: HeaderVistadelegadoComponent;
  let fixture: ComponentFixture<HeaderVistadelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderVistadelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderVistadelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
