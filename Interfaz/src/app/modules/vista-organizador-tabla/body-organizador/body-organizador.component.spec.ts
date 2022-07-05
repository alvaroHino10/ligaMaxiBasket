import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyOrganizadorComponent } from './body-organizador.component';

describe('BodyOrganizadorComponent', () => {
  let component: BodyOrganizadorComponent;
  let fixture: ComponentFixture<BodyOrganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyOrganizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
