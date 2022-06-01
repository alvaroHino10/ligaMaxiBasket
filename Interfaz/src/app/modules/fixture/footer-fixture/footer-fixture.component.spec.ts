import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFixtureComponent } from './footer-fixture.component';

describe('FooterFixtureComponent', () => {
  let component: FooterFixtureComponent;
  let fixture: ComponentFixture<FooterFixtureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFixtureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
