import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOrgEquiposPreinsComponent } from './modal-org-equipos-preins.component';

describe('ModalOrgEquiposPreinsComponent', () => {
  let component: ModalOrgEquiposPreinsComponent;
  let fixture: ComponentFixture<ModalOrgEquiposPreinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOrgEquiposPreinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOrgEquiposPreinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
