import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPreinsComponent } from './tabla-preins.component';

describe('TablaPreinsComponent', () => {
  let component: TablaPreinsComponent;
  let fixture: ComponentFixture<TablaPreinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPreinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPreinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
