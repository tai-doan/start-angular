import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechproductComponent } from './techproduct.component';

describe('TechproductComponent', () => {
  let component: TechproductComponent;
  let fixture: ComponentFixture<TechproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
