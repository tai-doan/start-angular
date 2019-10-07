import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietsinhvienComponent } from './chitietsinhvien.component';

describe('ChitietsinhvienComponent', () => {
  let component: ChitietsinhvienComponent;
  let fixture: ComponentFixture<ChitietsinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietsinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietsinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
