import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechcartComponent } from './techcart.component';

describe('TechcartComponent', () => {
  let component: TechcartComponent;
  let fixture: ComponentFixture<TechcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
