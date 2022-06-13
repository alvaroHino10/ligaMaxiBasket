import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLoginComponent } from './body-login.component';

describe('BodyLoginComponent', () => {
  let component: BodyLoginComponent;
  let fixture: ComponentFixture<BodyLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
