import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFixtureComponent } from './body-fixture.component';

describe('BodyFixtureComponent', () => {
  let component: BodyFixtureComponent;
  let fixture: ComponentFixture<BodyFixtureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyFixtureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
