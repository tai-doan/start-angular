import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsdetailComponent } from './filmsdetail.component';

describe('FilmsdetailComponent', () => {
  let component: FilmsdetailComponent;
  let fixture: ComponentFixture<FilmsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
