import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCpComponent } from './header-cp.component';

describe('HeaderCpComponent', () => {
  let component: HeaderCpComponent;
  let fixture: ComponentFixture<HeaderCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
