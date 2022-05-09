import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredecialCardComponent } from './credecial-card.component';

describe('CredecialCardComponent', () => {
  let component: CredecialCardComponent;
  let fixture: ComponentFixture<CredecialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredecialCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredecialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
