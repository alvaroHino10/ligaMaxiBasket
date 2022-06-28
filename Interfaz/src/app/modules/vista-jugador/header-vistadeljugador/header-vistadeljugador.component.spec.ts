import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVistadeljugadorComponent } from './header-vistadeljugador.component';

describe('HeaderVistadeljugadorComponent', () => {
  let component: HeaderVistadeljugadorComponent;
  let fixture: ComponentFixture<HeaderVistadeljugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderVistadeljugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderVistadeljugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
