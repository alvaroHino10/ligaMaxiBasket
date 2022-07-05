import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOrganizadorComponent } from './header-organizador.component';

describe('HeaderOrganizadorComponent', () => {
  let component: HeaderOrganizadorComponent;
  let fixture: ComponentFixture<HeaderOrganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderOrganizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
