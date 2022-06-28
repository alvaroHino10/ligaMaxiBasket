import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOrgEquiposRegisComponent } from './modal-org-equipos-regis.component';

describe('ModalOrgEquiposRegisComponent', () => {
  let component: ModalOrgEquiposRegisComponent;
  let fixture: ComponentFixture<ModalOrgEquiposRegisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOrgEquiposRegisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOrgEquiposRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
