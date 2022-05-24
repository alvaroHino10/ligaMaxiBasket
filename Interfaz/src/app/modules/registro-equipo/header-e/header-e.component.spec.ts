import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEComponent } from './header-e.component';

describe('HeaderEComponent', () => {
  let component: HeaderEComponent;
  let fixture: ComponentFixture<HeaderEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
