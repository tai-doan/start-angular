import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietkhoahocComponent } from './chitietkhoahoc.component';

describe('ChitietkhoahocComponent', () => {
  let component: ChitietkhoahocComponent;
  let fixture: ComponentFixture<ChitietkhoahocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietkhoahocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietkhoahocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
