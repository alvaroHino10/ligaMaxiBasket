import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCreComponent } from './header-cre.component';

describe('HeaderCreComponent', () => {
  let component: HeaderCreComponent;
  let fixture: ComponentFixture<HeaderCreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
