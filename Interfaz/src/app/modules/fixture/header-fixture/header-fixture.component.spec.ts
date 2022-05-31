import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFixtureComponent } from './header-fixture.component';

describe('HeaderFixtureComponent', () => {
  let component: HeaderFixtureComponent;
  let fixture: ComponentFixture<HeaderFixtureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFixtureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
