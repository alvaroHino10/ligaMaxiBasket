import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturePartidoComponent } from './fixture-partido.component';

describe('FixturePartidoComponent', () => {
  let component: FixturePartidoComponent;
  let fixture: ComponentFixture<FixturePartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixturePartidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturePartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
